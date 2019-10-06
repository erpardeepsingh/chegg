var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/first', function(req, res, next) {
  res.render('images',{path:'pardeep.png'});
});
router.get('/second', function(req, res, next) {
  res.render('images',{path:'pardeep.png'});
});
router.get('/third', function(req, res, next) {
  res.render('images',{path:'pardeep.png'});
});
router.get('/fourth', function(req, res, next) {
  res.render('images',{path:'pardeep.png'});
});
router.get('/fifth', function(req, res, next) {
  res.render('images',{path:'pardeep.png'});
});
module.exports = router;
