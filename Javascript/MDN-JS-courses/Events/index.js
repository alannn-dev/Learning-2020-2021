// VARIABLES 

 let cours = 'valeur de la variable'  // On peut tout mettre dans variable

 console.log(cours + ' // avant MAJ' ) //affiche variable (dans console)

 cours = "blablabla"
 console.log(cours + ' // après MAJ');

 

 // CONSTANTES

 
 const prenom = 'Patrice;'  // Constante : donc toujours string dans ce cas (Impossible à changer)

 // prenom = 24; // TypeError dans console car prenom = 'STRING' et NON number



 // FUNCTIONS


 function faireQuelqueChose(LeParamètreChoisi) {  // Déclaration de la fonction
  
    console.log('Je fais 1 test console log dans function + ' + LeParamètreChoisi);

}
// APPEL DE LA FONCTION + L'ARGUMENT CHOISI POUR LE PARAMÈTRE

faireQuelqueChose('Je choisi mon paramètre de function ici');  
faireQuelqueChose('Faire autre chose');

// AUTRE FAÇON DE DÉCLARER UNE FONCTION :

const faireUneTache = () => {
    console.log('Je fais un truc (2nd console.log avec autre manière de déclarer une function');
}

faireUneTache(); // APPEL FONCTION


// Deux manières ici de sélectionner élément dans HTML :

const btn = document.querySelector('#btn')
const img = document.getElementById('img')

// Ajouter un event

btn.addEventListener('click', () => {
    img.classList.add('show')  // ADD : ajouter class : show (REMOVE: enlever une classe) ou TOGGLE : Ajouter/Enlever)
})