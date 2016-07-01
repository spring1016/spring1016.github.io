var tplGame= require('../templates/game.string');

SPA.defineView('game', {
  html: tplGame,

  plugins:['deletated',{
    name:'avalon',
    options:function (vm) {
      vm.bannerlist  = [];
      vm.recommandslist  = [];
      vm.itemlist  = [];
    }
  }

],
  init:{
      recommandslistArray:[],
      formatData: function (arr) {
        var tempArr = [];
        for (var i = 0; i < Math.ceil(arr.length/3); i++) {
          tempArr[i] = [];
          tempArr[i].push(arr[3*i]);
          tempArr[i].push(arr[3*i+1]);
          tempArr[i].push(arr[3*i+2]);
        }
        return tempArr;
      }
  },

  bindEvents:{
    'beforeShow':function(){
      var that = this;

      // 获得vm对象
      that.vm = that.getVM();



       $.ajax({
        //  url:'/api/getlist.php',
         url:'/youyaoqi/mock/game.json',

         type: 'get',
         data:{
           rtype: 'game'
         },
         success:function(rs){
          //  that.livelistArray = rs.data;
          //  that.vm.livelist = that.formatData(rs.data);
          that.vm.bannerlist = rs.data.returnData.gameheader.banner;
          // console.log(that.vm.bannerlist[0].coverUrl);
          var mySwiper = new Swiper('#gamebanner', {
            loop: true,
            autoplay:3000,
            pagination: '.swiper-pagination'
            });
            //recommands 获取数据
          that.recommandslistArray  = rs.data.returnData.gameheader.recommands;
          that.vm.recommandslist = that.formatData(that.recommandslistArray);
            // console.log(that.vm.recommandslist);


            //itemList获取数据
            that.vm.itemlist   = rs.data.returnData.itemList;
            // var gamesize = that.vm.itemlist.size;
            console.log(that.vm.itemlist[0].coverUrl);
            console.log(that.vm.itemlist);
         }
       });
    },

   'show':function(){

   }
 }
});
