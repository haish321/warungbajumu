const router = require("express").Router()
const adminController = require("../controllers/adminController");
const {upload, uploadMultiple} = require("../middlewares/multer");
const upload2 = require("../middlewares/multer2");

router.get("/baju", adminController.viewBaju);
router.post("/baju", upload, adminController.addBaju);
// router.post("/baju", uploadMultiple, adminController.addBajuCloudinary);
router.put("/baju", adminController.editBaju);
router.delete("/baju/:id", adminController.deleteBaju);

module.exports  = router;