var conn = require('./db')
module.exports={

render(req,res,error,sucess){

    menus.getMenus().then(results => {
        res.render('index', {
          title: 'Teste2',
          menus:results,
          isHome: true
        });
      });
    }
}