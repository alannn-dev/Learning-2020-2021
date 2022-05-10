//IIFE Immediately Invoked Function Execution

(function () {
    var aName = "Barry";
})();
// Le nom de la variable n'est pas accessible depuis le périmètre externe
aName // lancement "Exception ReferenceError: aName n'est pas défini"


// Affecter l'IIFE à une variable ne la stocke pas mais reçoit son résultat.
var result = (function () {
    var name = "Barry";
    return name;
})();
// Crée immédiatement la sortie:
result; // "Barry"