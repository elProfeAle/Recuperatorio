

function calcularprecio (kilos , filamento){
    
if ('PLA' == filamento) {
    
} else {
    
}

let resultado = 
}
;

// ejercicio 2
let boton1= document.querrySelector("#btnEJ2a")
let boton2= document.querrySelector("#btnEJ2b")
let boton3= document.querrySelector("#btnEJ2c")
let boton4= document.querrySelector("#btnEJ2d")
let boton5= document.querrySelector("#btnEJ2e")
let lista= document.querySelector("#lista")
let libros = [ "caperucita" , "rapunzel" , "moana"  ]

boton1.onclick = function () {
libros.pop();}

boton2.onclick = function() {
libros.push("el mentalista")
}

boton3.onclick = function (){
lista.textContent= libros.length
}

boton4.onclick = function (){
libros.unshift(inputEJ2.value)
}
boton5.onclick = function (){
libros.shift()
}
// te quiero profe, poneme un 6 minimamente porfavor 
