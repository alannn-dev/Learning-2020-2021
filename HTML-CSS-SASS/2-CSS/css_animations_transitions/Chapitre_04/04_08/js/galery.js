//toggle sidebar when clicking navbar search button
jQuery('#navbarSearchButton').click(function(){
  jQuery(this).toggleClass('active');//set button in active state when sidebar is displayed
  jQuery('#mainContentRow').toggleClass('sbHidden sbDisplay');//toggle sidebar on and off
});//end click


/*Fix div.flip height*/
function resizeFlipDiv(){
  var cardHeight = jQuery("div.flip img").height();
  jQuery("div.flip").height(cardHeight);
  jQuery("div.front").height(cardHeight);
  jQuery("div.back").height(cardHeight);
}
//add event listerers for resizeFlipDivmethod
window.addEventListener("load", resizeFlipDiv, false);
window.addEventListener("resize", resizeFlipDiv, false);
var searchPanel = document.getElementById("searchPanel");
searchPanel.addEventListener("transitionend",resizeFlipDiv, false)
