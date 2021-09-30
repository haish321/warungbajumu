const Baju = require("../models/Baju");
const fs = require('fs-extra')
const path = require('path');

module.exports = {
    viewWarung: async(req, res) => {
        try {
            const baju = await Baju.find()
                // .populate({ path: 'imageId', select: 'id imageUrl'})
            // console.log(baju)

            res.render("warung/view_warung",{
                baju
            })
        } catch (error) {
            res.redirect("/warung/view_warung")
        }
    },

    detailViewWarung: async(req, res) => {
        const { id } = req.params
        try {
            const baju = await Baju.findOne({ _id: id })
                // .populate({ path: 'imageId', select: 'id imageUrl'})
            console.log(baju.imageUrl)

            res.render("warung/detail-baju/detail_view",{ baju })
        } catch (error) {
            res.redirect("/warung/detail_view")
        }
    },

    testimonialWarung: async(req, res) => {
        try {
            res.render("warung/testi_page")           
        } catch (error) {
            res.redirect("/warung/view_warung")
        }
    },

    about: async(req, res) => {
        try {
            res.render("warung/about")
        } catch (error) {
            res.redirect("/warung/view_warung")
        }
    }
}