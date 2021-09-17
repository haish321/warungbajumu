const Baju = require("../models/Baju");

module.exports = {
    viewUser: async(req, res) => {
        try {
            res.render("users/view_users")
        } catch (error) {
            res.redirect("/users/view_users")
        }
    },

    detailViewUser: async(req, res) => {
        try {
            res.render("users/detail-baju/detail_view")
        } catch (error) {
            res.redirect("/users/detail_view")
        }
    }
}