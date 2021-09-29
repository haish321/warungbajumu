var seeder = require('mongoose-seed'); // npm i mongoose-seed
var mongoose = require('mongoose');
// Connect to MongoDB via Mongoose
seeder.connect("mongodb://had321:coyg212a@clusterfree-shard-00-00.rots5.mongodb.net:27017,clusterfree-shard-00-01.rots5.mongodb.net:27017,clusterfree-shard-00-02.rots5.mongodb.net:27017/dbwarungbajumu?ssl=true&replicaSet=atlas-md8nes-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
}, function () {

    // Load Mongoose models
    seeder.loadModels([
        './models/Baju',
        './models/Image',
    ])

    seeder.clearModels(['Baju', 'Image'], function(){

        seeder.populateModels(data, function(){
            seeder.disconnect();
        });
    });
});

var data = [
    // start baju
    {
        'model': 'Baju',
        'documents': [
            {
                _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
                nama: 'Baju pengantin wisudah',
                lingkar_dada: 65,
                panjang: 90,
                kondisi: "Mulus mas hehehe",
                harga: 79,
                deskripsi: "Barang bagus masih mulus dek ",
                imageUrl: 'images/1632036844453.jpeg'

            }
        ]
    },
    //  end baju

    {
        'model' : 'Image',
        'documents': [
            {
                _id: mongoose.Types.ObjectId('6143e4f605b9c091f9431eb1'),
                imageUrl: 'images/1632036844453.jpeg'
            }
        ]
    }

];