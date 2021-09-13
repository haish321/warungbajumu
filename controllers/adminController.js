const Baju = require("../models/Baju");

module.exports = {
    viewBaju: async (req, res) => {
        try{
            const baju = await Baju.find();
            const alertMessage = req.flash("alertMessage")
            const alertStatus = req.flash("alertStatus")

            const alert = {message: alertMessage, status: alertStatus}

            res.render("admin/index",{
                baju,
                alert,
                title: "CRUD"
            })
        } catch(e){
            res.redirect('/admin/index')
        }
    }
}