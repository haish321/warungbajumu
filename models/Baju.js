const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; 

const bajuSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: false
    },
    lingkar_dada: {
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
     // satu item mempunyai banyak image
    imageId: [{
        type: ObjectId,
        ref: 'Image'
    }],
    // status: {
    //     type: String,
    //     require: false
    // },
    
})


module.exports = mongoose.model("Baju", bajuSchema);