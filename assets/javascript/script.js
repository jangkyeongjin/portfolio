$(function(){
   $('.main .navi .menu').hover(
     function(){
       $('.slide_menu .sl_m').stop().slideDown();
     },
     function(){
       $('.slide_menu .sl_m').stop().slideUp();
     })
})
