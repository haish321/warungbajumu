var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", usersController.viewUser);

router.get("/detail-baju/:id", usersController.detailViewUser);

router.get("/testimonials", usersController.testimonialUsers)
router.get("/about", usersController.about)

module.exports = router;
