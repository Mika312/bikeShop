var express = require('express');
var router = express.Router();

//Stockage de l‘information des vélos dans une variable.
var dataBike = [
  {name:'BIKO45' ,price:645 ,url:"../images/bike-1.jpg"},
  {name:'BIKO55' ,price:745 ,url:"../images/bike-2.jpg"},
  {name:'BIKO65' ,price:879 ,url:"../images/bike-3.jpg"},
  {name:'BIKO75' ,price:999 ,url:"../images/bike-4.jpg"},
  {name:'BIKO85' ,price:1045 ,url:"../images/bike-5.jpg"},
  {name:'BIKO95' ,price:1219 ,url:"../images/bike-6.jpg"},
];

var dataCardBike = [
  {name:'BIKO45' ,price:645 ,url:"../images/bike-1.jpg", quantity:1},
  {name:'BIKO55' ,price:745 ,url:"../images/bike-2.jpg", quantity:2},
  {name:'BIKO65' ,price:879 ,url:"../images/bike-3.jpg", quantity:3},
  {name:'BIKO75' ,price:999 ,url:"../images/bike-4.jpg", quantity:4},
  {name:'BIKO85' ,price:1045 ,url:"../images/bike-5.jpg", quantity:5},
  {name:'BIKO95' ,price:1219 ,url:"../images/bike-6.jpg", quantity:6},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  
  //Injection des informations de dataBike dans le fichier index.ejs via res.render().
  res.render('index', { title: 'bikeShop', dataBike});
});

router.get('/shop', function(req, res, next) {

  // Injection des informations de dataCardBike dans le fichier shop.ejs via res.render().
  res.render('shop', { title: 'bikeShop', dataCardBike});
});


module.exports = router;
