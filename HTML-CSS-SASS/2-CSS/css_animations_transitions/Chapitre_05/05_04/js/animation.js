/*All animation classes defined in animate.css*/
var animations = ["bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeI","DownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"];


/*Get the necessary elements in the DOM*/
var theButton = document.getElementById("animationTrigger");
var theH1 = document.getElementById("animateMe");
var logDiv = document.getElementById("log");


/*Add the necessary event listeners*/
theButton.addEventListener("click", animateRandom, false);
theH1.addEventListener("animationend", unAnimate, false);
theH1.addEventListener("animationstart", logAnimation, false);
theH1.addEventListener("animationiteration", logAnimationIteration, false);



//AnimateRandom method
function animateRandom(e){
  //choose a random animation in the animations array
  var randNum = Math.floor(Math.random() * animations.length);
  var theAnimation = animations[randNum];

  //choose a random number between 1 and 5
  var anotherRandNum = Math.ceil(Math.random() * 5);
  //assign the chosen animation to the H1 element
  theH1.className = "animated "+theAnimation;
  //assign anotherRandNum to animation-iterationCount
  theH1.style.animationIterationCount = anotherRandNum;
}

//unanimate method
function unAnimate(e){
  theH1.className = " ";
  appendLogText(`L'animation ${e.animationName} est terminée.`);
}

//logAnimation method
function logAnimation(e){
  //reset Log div
  document.querySelectorAll("#log p").forEach((p)=>(logDiv.removeChild(p)));

  appendLogText(`L'animation ${e.animationName} a débuté.`);
}
//logAnimationIteration
function logAnimationIteration(e){
  appendLogText(`L'animation ${e.animationName} joue pour la ${e.elapsedTime + 1} eme fois.`);
}




//appendLogText helper function
function appendLogText(txt){
  var theP = document.createElement("p");
  var theTxt = document.createTextNode(txt);
  theP.appendChild(theTxt);
  logDiv.appendChild(theP);
}
