
/* menü */
$(document).ready(function(){
$(".title").click(function(){
 $("#menu ul").slideToggle();
  deger = $(".title span img").attr("src");
  
 });
 });

/* slider */

$(function(){

var toplamli = $(".slider ul li").length;
var liWidth = 740;
var toplamWidth = liWidth * toplamli;
var liDeger = 0;
$(".slider ul").css("width",toplamWidth + "px");
$("a.ileri").click(function(){
	if (liDeger < toplamli - 1){
		liDeger++;
		yeniWidth = liWidth * liDeger;
		$(".slider ul").animate({marginLeft:"-" + yeniWidth + "px"} , 500);
} else {
	liDeger=0;
	$(".slider ul").animate({marginLeft: "0"} , 500);
}
return false;
})

$("a.geri").click(function(){
	if (liDeger > 0){
		liDeger--;
		yeniWidth = liWidth * liDeger;
		$(".slider ul").animate({marginLeft:"-" + yeniWidth + "px"} , 500);
}
return false;
})

});
