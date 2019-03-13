var conn = require('./../inc/db');
var menus = require('../inc/menus');
var express = require('express');
var router = express.Router();
var reservations = require('./../inc/reservations')
/* GET home page. */
router.get('/', function (req, res, next) {

  menus.getMenus().then(results => {
    res.render('index', {
      title: 'Teste2',
      menus: results,
      isHome: true
    });
  });
});


menus.getMenus().then(results =>{

  router.get('/contacts', function (req, res, next) {
    res.render('contacts', {
      title: 'Entre em contato!',
      background: 'images/img_bg_3.jpg',
      h1: 'Diga um Oi',
      menus:results
    })
  });

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
  reservations.render(req,res);
});

router.post('/reservations', function (req, res, next) {

  if(!req.body.name){
    reservations.render(req,res,"Digite um nome")
  }else if(!req.body.email){
    reservations.render(req,res,"Digite um e-mail")
  }else if(!req.body.people){
    reservations.render(req,res,"Digite o numero de pessoas")
  }else if(!req.body.date){
    reservations.render(req,res,"Informe uma data")
  }else if(!req.body.time)
  reservations.render(req,res,"Inoforme um horario")
  else{
    
    reservations.save(req.body).then(results =>{
      //limpa o formulario
      req.body ={};
      reservations.render(req,res,null,"Reserva Realizada Com Sucesso!");
    }).catch(err=>{
      reservations.render(req,res,err.message);
    })
  }
});


router.get('/services', function (req, res, next) {
  res.render('services', {
    title: 'Nossos Serviços',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer servi-los'
  })
});
module.exports = router;
