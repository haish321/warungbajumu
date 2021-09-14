const router = require("express").Router()

const adminController = require("../controllers/adminController");

router.get("/baju", adminController.viewBaju);
router.post("/baju", adminController.addBaju);
router.put("/baju", adminController.editBaju);
router.delete("/baju/:id", adminController.deleteBaju);

module.exports = router;