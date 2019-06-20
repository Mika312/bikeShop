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

var dataCardBike = [];

/* GET home page. */
router.get('/', function(req, res, next) {

  //Injection des informations de dataBike dans le fichier index.ejs via res.render().
  res.render('index', { title: 'bikeShop', dataBike});
});

router.post('/shop', function(req, res, next) {
  // console.log("REQ BODY ===>", req.body)
  // Exploitation des informations reçues en POST. Ajout des informations du vélo récupéré dans dataCardBike.
  dataCardBike.push({
  name: req.body.bikeNameFromFront,
  price: req.body.bikePriceFromFront, 
  url: req.body.bikeImageFromFront,
  quantity: req.body.bikeQuantityFromFront
});

// console.log ("DATACARDBIKE ===>", dataCardBike)

  // Injection des informations de dataCardBike dans le fichier shop.ejs via res.render().
  res.render('shop', { title: 'bikeShop', dataCardBike});
});


// Création de la Route pour la suppression dans le panier.
router.get('/delete-shop', function(req,res,next){
// console.log("POSITION ===>", req.query);
// Supprimer l'élément du tableau dataCardBike en utilisant la valeur envoyée du frontend.
dataCardBike.splice(req.query.position,1);

res.render('shop',{title: 'bikeShop',dataCardBike})
})

// Création de la Route pour la MàJ de la quantité dans le panier.
router.post('/update-shop', function(req,res,next) {
  console.log("REQ BODY ===>",req.body);

  // MàJ de dataCardBike.quantity du vélo sélectionné avec la valeur envoyée par le front end.
  if (req.body.quantity === '0') {
    dataCardBike.splice(req.body.position,1);
  }else{
    dataCardBike[req.body.position].quantity = req.body.quantity
  };

  res.render('shop',{title: 'bikeShop',dataCardBike})
});

module.exports = router;
