console.log("hello test");
//alert("hello!")
var number = 5;
var str = 'test';
var array = [];
var mixedArray = ["test", 5, []];
var boolean = true;
var booleanf = false;
var colors = {
    red: "#f00",
    green: "#0f0",
    blue: "#ff0"
};
var vehicle = {
    car: {
        peugeot: "400"
    },
    truck: {
        semi:"500"
    }
};

// operateurs

var add = 1 + 2 - 4 * 5 / 8;
var concat = "ma voiture est une " + vehicle.truck.semi;
var stroperation = 1 + "2";
var iterator = 0;
iterator ++; //add 1
iterator --; //remove 1
var numeric = 0;
numeric = numeric + 4;
numeric += 4; // add value to itself (* / - + operateur)
// undefined NaN not a number
var modulo = 10%2; // reste de la division de 10 par 2
var math = Math.round(0.5); // arrondi
math = Math.floor(0,5); // arrondi infrieur
math = Math.ceil(0,5); // arrondi superieur
math = Math.sqrt (25); // racine carré
math = 5**3; // 5 puissance 3
math = Math.pow(5,3); // 5 puissance 3
// operateur de comparaison
var a = true;
var b = 1;
if(a || b) { //ou
    console.log("ou");
}
if(a && b) { //et
    console.log("et");
}
if(a == b) { //égal
    console.log("égal");
}
if(a === b) { //égal typé
    console.log("égal typé");
}
if( a != b) { // différent
    console.log("différent");
}
if( a !== b) { // différent typé
    console.log("différent typé");
}

if( !a) { // si not a
    console.log("not");
}

var c = false;

if( a ) { // si a alors
    console.log("si a");
}
else if ( b ) { // sinon si b alors
    console.log("si b");
}
else if ( c ) { // sinon si c alors
    console.log("si c");
}
else { // sinon dans tous les autres cas hors a b c
    console.log("si ni a b c");
}
// boucles
var counter = 0;
while( counter < 3 ) {
    console.log(counter);
    counter++;
}
for( var i = 0, n = 2; i < 5; i += n ) {
    console.log( "i=" + i );
}

var tab = [2, 4, 6, 8, 10]; // tab lenght retourne la longueur du tableau
for( var j=0; j < tab.length; j++ ) {
    console.log ( tab[j] );
}

for ( var element of tab ) { // parcours les éléments du tableau
    console.log (element);
}

for ( var key in tab ) { // parcours les clefs(index) du tableau
    console.log (key);
}
/*
var d = 0;
do{
    console.log("salut");
}
while ( d < 2 ){
    console.log("")
}
*/
for ( var element of tab ) { // parcours les éléments du tableau
    if (element ==4 ) {
        continue; // saute au prochain élément du for
    }
    if (element ==8 ) {
        break; // arrete et sort de la boucle
    }
    console.log (element);
}

// Functions
function addition(arg1, arg2) {
    return arg1 + arg2
}
var resultat = addition(4, 6);
console.log( resultat );
console.log( addition ( 5, 8));

var soustraction = function( arg1, arg2) {
    return arg1 - arg2;
}

var soustraction = function( arg1, arg2=5, arg3=10 ) { // arg2 est un argument facultatif
    return arg1 - arg2 - arg3;
}
console.log(soustraction(8));

var top; // jamais utiliser top ou class ou ma-variable