
//ejercicio 1
/*
function calcularPrecio (kilos, filamento)
{
    if (filamento = "PLA"){
    return 1500 * kilos
}   if (filamento = "PETG"){
return 2000 * kilos
}   if (filamento = "ABS"){
return 5500 * kilos
}
}
 */
//ejercicio 2
let libros = ["El Principito", "Alquimia", "Harry Potter"]
let boton1 = document.querySelector ("#btnEJ2a")
let boton2 = document.querySelector ("#btnEJ2b")
let boton3 = document.querySelector ("#btnEJ2c")
let boton4 = document.querySelector ("#btnEJ2d")
let boton5 = document.querySelector ("#btnEJ2e")
let input1 = document.querySelector ("#inputEj2")
let parrafo1 = document.querySelector ("#p")
boton1.onclick = function () {
    libros.pop()
    console.log= libros
}
boton2.onclick = function () {
    libros.push = input1.value 
    console.log = libros
}
boton3.onclick = function () {
    parrafo1 = (libros)
}
boton4.onclick = function () {
    libros.unshift = input1.value 
    console.log = libros
}
boton5.onclick = function () {
    libros.shift
    console.log
}