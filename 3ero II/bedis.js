let filamento = "PETG"
let Kilo = 4



function calcularPrecio (Kilo, filamento, )
{ 
if (filamento = "PLA") {
    return 1500 * Kilo
 }  {if(filamento = "PETG") 
    return 2000 * Kilo}  

 { if (filamento = "ABS")
return 5500 * Kilo
 }

}

let boton1 = document.querySelector ("#btnEJ2a")
let boton2 = document.querySelector ("#btnEJ2b")
let boton3 = document.querySelector ("#btnEJ2c")
let boton4 = document.querySelector ("#btnEJ2d")
let boton5 = document.querySelector ("#btnEJ2e")
let input = document.querySelector ("#inputEj2")
let parrafo = document.querySelector ("#p")

let arregloLibros = ["El principito, El señor de los anillos, Pulsion "]

console.log = arregloLibros

boton1.onclick = function () {
arregloLibros.pop()

}

boton2.onclick = function () {
arregloLibros.push = input.value

}

boton3.onclick = function () {
 parrafo = (arregloLibros)

}

boton4.onclick = function () {
arregloLibros.unshift = input.value
}


boton5.onclick = function (){
    arregloLibros.shift 

} 
