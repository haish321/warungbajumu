const router = require("express").Router()
const adminController = require("../controllers/adminController");
const {upload} = require("../middlewares/multer");

router.get("/baju", adminController.viewBaju);
router.post("/baju", upload, adminController.addBaju);
router.put("/baju", adminController.editBaju);
router.delete("/baju/:id", adminController.deleteBaju);

module.exports  = router;