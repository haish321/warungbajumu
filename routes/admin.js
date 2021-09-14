const router = require("express").Router()

const adminController = require("../controllers/adminController");

router.get("/baju", adminController.viewBaju);

router.post("/baju", adminController.addBaju);

module.exports = router;