$(function(){

   $('.main .nav .menu ul > li').hover(function(){
     console.log('ㅇ');
     $('.slide_menu').stop().slideDown();

   },function(){
     $('.slide_menu').stop().slideUp();
   })
   //
   // function(){
   //   console.log('ㅇㅇ');
   //   $('.slide_menu .sl_m').stop().slideDown();
   // },
   // function(){
   //   $('.slide_menu .sl_m').stop().slideUp();
   // })

//silde
var slide_l = $(".depth .slide").length;
var slide_w = $(".depth").width();
var pagen = 0;

$(".depth .slide").each(function(i){
  console.log('ㅋ');
   $(this).css("left", (i*slide_w) + "px");
});
for(var i=0; i<slide_l; i++){
   $(".depth .btn").append("<div></div>");
}
$(".depth .prev").click(function(){
   if(pagen <= 0)return;
   var i = pagen - 1;
   moveP(i);
});
$(".depth .next").click(function(){
   if(pagen >= slide_l-1)return;
   var i = pagen + 1;
   moveN(i);
});
function moveN(i){
   $(".depth .slide").eq(pagen).css("left",0).stop().animate({"left": (slide_w * -1) + "px" });
   $(".depth .slide").eq(i).css("left", slide_w + "px").stop().animate({"left":0});
   pagen = i;
}
function moveP(i){
   $(".depth .slide").eq(pagen).css("left",0).stop().animate({"left": (slide_w * 1) + "px" });
   $(".depth .slide").eq(i).css("left", "-" + slide_w + "px").stop().animate({"left":0});
   pagen = i;
}
// $(".depth .btn div").click(function(){
//    var i = $(this).index();
//    move(i);
// });
});
