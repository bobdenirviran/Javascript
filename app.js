/* DOM : DOCUMENT OBJECT MODELE 
L'ensemble des éléments html du document
*/
var element = document.getElementById("test");
var button = document.getElementById("action");
var flag = true;
button.onclick = function() {
    var colors = {
        text: "red",
        gb: "yellow"
    };
    flag = !flag;
    if( flag ) {
       colors.text = "yellow"; // met le texte de l'element en rouge
       colors.bg = "red";
    }
    element.style.color = colors.text; // met le texte de l'element en rouge
    element.style.backgroundColor= colors.bg; // met la couleur du fond
    element.innerHTML = "ceci est du texte remplacé";
}
//Selector
var divs = document.getElementsByTagName("div");

//Selection comme en css !!!
var classed = document.querySelector(".test2"); //premier trouvé
var classeds = document.querySelectorAll(".test2");
console.log(divs);
console.log(classed);
console.log(classeds);
for ( var div of divs ) {
    div.style.color = "green";
    div.style.fontWeight = "bold";
}
// Ajout d'une classe
classed.onclick = function () {
    if( classed.classList.contains("active")) {
        classed.classList.remove("active");
    }
    else{
        classed.classList.add("active");
    }
}