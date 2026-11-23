/*
function calcularPrecio(litros,premium,naftasuper) {
//No se puede declarar la misma variable dos veces
//Que valor tiene nafta super? y premium? 
//El enunciado pide que se ingrese un tipo de nafta, un texto
//No podes multiplicar un numero por un texto
let preciototal =litros * naftasuper;
let preciototal =litros * premium;
//Si nafta super que? Mal la condicion
if (naftasuper) {
    //Multiplicas el precio total por los litros por 1500? 
    preciototal * litros * 1500
} else (premium)){
    preciototal * litros * 2000
}
    Si la persona te pasa los litros, para que quiere saber los litros que cargo? Si ya lo sabe
mensaje.textContent ="la persona lleno" + litros 
}
console.log(calcularPrecio(1500,"naftasuper"));
 console.log(calcularPrecio(2000,"premium"))
*/
//Bien guardados los elementos en variables
let peliculas = [ 'barbie','nemo','la sirenita'];
let inputPeli = document.querySelector("#inputEj2");
let botonEU = document.querySelector("#btnEJ2a");
let botonAP = document.querySelector("#btnEJ2b");
let botonMP = document.querySelector("#btnEJ2c");
let botonAI = document.querySelector("#btnEJ2d");
let botonEP = document.querySelector("#btnEJ2e");

botonEU.onclick =function () {
    //Faltan parentesis al pop() para que funcione
    peliculas.pop  
}
//Se utiliza siempre el mismo boton botonEU
botonEU.onclick =function () {
    //Bien cargado
    peliculas.push(inputPeli.value);
    inputPeli.value = "";
}
//Se utiliza siempre el mismo boton botonEU

botonEU.onclick =function () {
    //Tenias que mostrar el arreglo, no la cantidad
    peliculas.length
}
//Se utiliza siempre el mismo boton botonEU

botonEU.onclick =function () {
    //Te falta poner que valor agregar al inicio
    peliculas.unshift

}
//Se utiliza siempre el mismo boton botonEU
botonEU.onclick =function () {
    //Faltan parentesis del shift()
    peliculas.shift  
}
