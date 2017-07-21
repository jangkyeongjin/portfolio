$(function(){

   $('.main .nav .menu ul > li').hover(function(){
     console.log('ㅇ');
     $('.slide_menu').stop().slideDown();

   },function(){
     $('.slide_menu').stop().slideUp();
   })

})
//
// function(){
//   console.log('ㅇㅇ');
//   $('.slide_menu .sl_m').stop().slideDown();
// },
// function(){
//   $('.slide_menu .sl_m').stop().slideUp();
// })
