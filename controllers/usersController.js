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
        const { id } = req.params
        try {
            const baju = await Baju.findOne({ _id: id })
                // .populate({ path: 'imageId', select: 'id imageUrl'})
            console.log(baju.imageUrl)

            res.render("users/detail-baju/detail_view",{ baju })
        } catch (error) {
            res.redirect("/users/detail_view")
        }
    },

    testimonialUsers: async(req, res) => {
        try {
            res.render("users/testi_page")           
        } catch (error) {
            res.redirect("/users/view_users")
        }
    },

    about: async(req, res) => {
        try {
            res.render("users/about")
        } catch (error) {
            res.redirect("/users/view_users")
        }
    }
}