const Baju = require("../models/Baju");
const Image = require('../models/Image');
const fs = require('fs-extra')
const path = require('path')


module.exports = {
    viewBaju: async (req, res) => {
        try{
            const baju = await Baju.find();
            const alertMessage = req.flash("alertMessage")
            const alertStatus = req.flash("alertStatus")

            const alert = {message: alertMessage, status: alertStatus}

            res.render("admin/baju/view_baju",{
                baju,
                alert,
                title: "CRUD"
            })
        } catch(e){
            res.redirect('/admin/baju')
        }
    },

    addBaju: async(req, res) => {
        try {
            const { nama, lingkar_dada, panjang, kondisi, harga, deskripsi } = req.body;
            console.log(req.files)
            if(req.files.length > 0){
                const newBaju = { nama, lingkar_dada, panjang, kondisi, harga, deskripsi }                
                const baju = await Baju.create(newBaju);
                for(let i = 0; i < req.files.length; i++){
                    const imageSave =  await Image.create({ imageUrl: `images/${req.files[i].filename}`})
                    baju.imageId.push({ _id: imageSave._id});
                    await baju.save();

                }
                req.flash("alertMessage", "Succes add data Baju");
                req.flash("alertStatus", "success");
                res.redirect("/admin/baju");
            }
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/admin/baju");
        }
    },

   
    editBaju: async(req, res) => {
        try {
            const { id, nama, lingkar_dada, panjang, kondisi, harga, deskripsi } = req.body;
            const baju = await Baju.findOne({ _id: id })

            baju.nama = nama;
            baju.lingkar_dada = lingkar_dada;
            baju.panjang = panjang
            baju.kondisi = kondisi;
            baju.harga = harga;
            baju.deskripsi = deskripsi;
            await baju.save()

            req.flash("alertMessage", "Succes Edit data Baju");
            req.flash("alertStatus", "success");
            res.redirect("/admin/baju");

        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/admin/baju");
        }
    },

    deleteBaju: async(req, res) => {
        try {
            const { id } = req.params;
            const baju = await Baju.findOne({ _id: id });
            await baju.remove();

            req.flash("alertMessage", "Succes Delete data Baju");
            req.flash("alertStatus", "warning");
            res.redirect("/admin/baju");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/admin/baju");
        }
    }
}