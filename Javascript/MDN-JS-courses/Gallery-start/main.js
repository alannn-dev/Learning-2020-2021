const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */


for (let i = 1; i <= 5; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic' + i + '.jpg');  // Ajout i pic1 pic2 pic3.jpg etc...
thumbBar.appendChild(newImage);
}


thumbBar.addEventListener('click', function(e){
	var imgSrc = e.target.getAttribute('src');
	displayedImage.setAttribute('src', imgSrc);
});

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(){
	
	if (btn.getAttribute('class') === 'dark'){  // === opérateur de comparaison (égalité)

		btn.setAttribute('class','light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

	}else{
		btn.setAttribute ('class','dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';   // = opérateur d'assignation
	}

}); // Penser à la fermeture de la parenthèse !



