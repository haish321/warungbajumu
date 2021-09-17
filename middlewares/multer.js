// https://github.com/elfinsanjaya12/multer/blob/master/multer.js
const multer = require("multer")
const path = require("path")
const fs = require("fs")

const storageMultiple = multer.diskStorage({
    destination: function(req, file, cb){
        var dir = 'public/images';
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
        cb(null, dir)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const uploadMultiple = multer({
    storage: storageMultiple,
    limits: {fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).array("image", 12);


// check file type
function checkFileType(file, cb){
    // allowed yet
    const fileTypes = /jpeg|jpg|gif|png/;
    // check ext
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // check mime 
    const mimeType = fileTypes.test(file.mimetype);

    if(mimeType && extName){
        return cb(null, true);
    } else {
        cb("ERror: Images OnlY!1!!1");
    }
}

module.exports = {uploadMultiple}