var express = require('express');
var router = express.Router();

const warungController = require('../controllers/warungController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", warungController.viewWarung);

router.get("/detail-baju/:id", warungController.detailViewWarung);

router.get("/testimonials", warungController.testimonialWarung)
router.get("/about", warungController.about)

module.exports = router;
