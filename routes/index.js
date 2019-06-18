var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'bikeShop' });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'bikeShop' });
});


module.exports = router;
