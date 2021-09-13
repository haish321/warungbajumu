const mongoose = require("mongoose");

const bajuSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: false
    },
    lingkarDada: {
        type: String,
        required: false,
    },
    panjang: {
        type: String,
        required: true
    },
    kondisi: {
        type: String,
        required: true
    },
    harga: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: false
    },
    // status: {
    //     type: String,
    //     require: false
    // },
    // image: {
    //     type: String,
    //     required: false
    // }
})


module.exports = mongoose.model("Baju", bajuSchema);