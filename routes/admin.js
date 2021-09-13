const router = require("express").Router()

const adminController = require("../controllers/adminController");

router.get("/", adminController.viewBaju);

module.exports = router;