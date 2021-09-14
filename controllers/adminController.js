const Baju = require("../models/Baju");

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
            await Baju.create({ nama, lingkar_dada, panjang, kondisi, harga, deskripsi });

            req.flash("alertMessage", "Succes add data Baju");
            req.flash("alertStatus", "success");
            res.redirect("/admin/baju");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/admin/baju");
        }
    }
}