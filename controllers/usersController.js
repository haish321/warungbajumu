const Baju = require("../models/Baju");

module.exports = {
    viewUser: async(req, res) => {
        try {
            res.render("users/view_users")
            // res.render("admin/baju/view_baju",{
            //     baju,
            //     alert,
            //     title: "CRUD"
            // })
        } catch (error) {
            res.redirect("/users/view_users")
        }
    }
}