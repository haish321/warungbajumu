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
        required: false
    },
    kondisi: {
        type: String,
        required: false
    },
    harga: {
        type: String,
        required: false
    },
    deskripsi: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    cloudinary_id:{
        type: String
    },
    cloudinaryImageUrl: {
        type: String
    }
     // satu item mempunyai banyak image
    // imageId: [{
    //     type: ObjectId,
    //     ref: 'Image'
    // }],
    // status: {
    //     type: String,
    //     require: false
    // },
    
})


module.exports = mongoose.model("Baju", bajuSchema);