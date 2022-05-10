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
//add event listerers for resizeFlipDiv method
window.addEventListener("load", resizeFlipDiv, false);
window.addEventListener("resize", resizeFlipDiv, false);
var searchPanel = document.getElementById("searchPanel");
searchPanel.addEventListener("transitionend",resizeFlipDiv, false);

///////////////////////////
//Initial Animation
///////////////////////////

//get the cards to animate
var theCards = document.querySelectorAll("#mainContent #galeryList li");
//number of visible cards when page loads
var enteredLi = 0;
//delay between animation
var delay = 50;
//add event listerers for initial Animation
window.addEventListener("load", animateLi, false);
//addEventListener on each card to trigger next animation
theCards.forEach(
  (card)=>(
    card.addEventListener("animationstart", animateNextLi, false)
  )
);

//animateNextLi is used to delay the next animation using setTimeout
function animateNextLi(e){
  //check if there are cards left to animate
  if(enteredLi < theCards.length){
    //wait the delay and animate the next card
    window.setTimeout(animateLi, delay);
  }
}

//animateLi actually does the heavy lifting!
function animateLi(){
  //check if there are cards to animate (only usefull on initial page load)
  if(theCards.length){
    //get the card to animate
    var liToAnimate = theCards[enteredLi];
    //animate the card
    liToAnimate.className = "animated";
    //increment entered li
    enteredLi ++;
  }
}
