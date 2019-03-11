var conn = require('./../inc/db');
var menus = require('../inc/menus');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  menus.getMenus().then(results);
  res.render('index', {
    title: 'Teste2',
    menus: results
  });
});

router.get('/contacts', function (req, res, next) {
  res.render('contacts', {
    title: 'Entre em contato!',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um Oi'
  })
});

router.get('/menus', function (req, res, next) {
  menus.getMenus().then(results => {
    res.render('menus', {
      title: 'Nosso Menu',
      background: 'images/img_bg_1.jpg',
      h1: 'Saboreie nosso menu',
      menus: results
    });
  });
});



router.get('/reservations', function (req, res, next) {
  res.render('reservations', {
    title: 'Faça sua Reserva',
    background: 'images/img_bg_2.jpg',
    h1: 'Faça a sua reserva!'
  })
});

router.get('/services', function (req, res, next) {
  res.render('services', {
    title: 'Nossos Serviços',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer servi-los'
  })
});
module.exports = router;
