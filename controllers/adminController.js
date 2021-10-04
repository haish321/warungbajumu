const Baju = require("../models/Baju");
const fs = require('fs-extra')
const path = require('path')
const cloudinary = require('cloudinary')


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
                title: "warungbajumu"
            })
        } catch(e){
            res.redirect('/admin/baju')
        }
    },

    addBaju: async(req, res) => {
        try {
            const { nama, merek, lingkar_dada, panjang, kondisi, harga, deskripsi } = req.body;
            console.log(req.file)
            let result = cloudinary.uploader.upload(`images/${req.file.filename}`)
            await Baju.create({
                nama, 
                merek,
                lingkar_dada, 
                panjang, 
                kondisi, 
                harga, 
                deskripsi,
                imageUrl : `images/${req.file.filename}`,
                cloudinary_id: result.public_id
            })
            
            req.flash("alertMessage", "Succes add data Baju");
            req.flash("alertStatus", "success");
            res.redirect("/admin/baju");
            
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/admin/baju");
        }
    },

    addBajuCloudinary: async(req, res) => {
        try {
            const { nama, merek, lingkar_dada, panjang, kondisi, harga, deskripsi } = req.body;
            let result = cloudinary.uploader.upload(req.file)
            // res.json(result)
            let baju = new Baju({
                nama, merek, lingkar_dada, panjang, kondisi, harga, deskripsi,
                avatar: result.secure_url,
                cloudinary_id: result.public_id
            })
            await baju.save()
            res.json(baju)
        } catch (error) {
            console.error(error)
        }
    },
   
    editBaju: async(req, res) => {
        try {
            const { id, nama, merek, lingkar_dada, panjang, kondisi, harga, deskripsi } = req.body;
            const baju = await Baju.findOne({ _id: id })

            if(req.file == undefined){
                baju.nama = nama;
                baju.merek = merek;
                baju.lingkar_dada = lingkar_dada;
                baju.panjang = panjang
                baju.kondisi = kondisi;
                baju.harga = harga;
                baju.deskripsi = deskripsi;
                console.log(req.file)
                await baju.save();

                req.flash("alertMessage", "Succes Edit data Baju");
                req.flash("alertStatus", "success");
                res.redirect("/admin/baju");
            } else {
                await fs.unlink(path.join(`public/${baju.imageUrl}`))
                baju.nama = nama;
                baju.lingkar_dada = lingkar_dada;
                baju.panjang = panjang
                baju.kondisi = kondisi;
                baju.harga = harga;
                baju.deskripsi = deskripsi;
                console.log(req.file)
                baju.imageUrl = `images/${req.file.filename}`
                await baju.save();
                req.flash("alertMessage", "Succes Edit data Baju");
                req.flash("alertStatus", "success");
                res.redirect("/admin/baju");
            }
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