var tpXiaojistory= require('../templates/xiaojistory.string');

SPA.defineView('xiaojistory', {
  html: tpXiaojistory,

  plugins:['delegated'],

  bindActions:{
      // 'goto.login': function () {
      //   SPA.open('login');
      // }
    }
});
