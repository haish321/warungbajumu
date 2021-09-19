const Baju = require("../models/Baju");
const fs = require('fs-extra')
const path = require('path');

module.exports = {
    viewUser: async(req, res) => {
        try {
            const baju = await Baju.find()
                // .populate({ path: 'imageId', select: 'id imageUrl'})
            // console.log(baju)

            res.render("users/view_users",{
                baju
            })
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