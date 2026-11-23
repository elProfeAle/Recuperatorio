//ejercicio 2//
let peliculas = ["frozen", "rapunzel", "coco"];
let input = document.querySelector ("#inputEj2")
let eliminarUltimo = document.querySelector ("#btnEJ2a")
let agregarFinal = document.querySelector ("#btnEJ2b")
let mostrarArreglo = document.querySelector ("#btnEJ2c")
let agregarInicio = document.querySelector ("#btnEJ2d")
let eliminarPrimero = document.querySelector ("#btnEJ2e")

eliminarUltimo.onclick= function (){
    peliculas.pop()
}
agregarFinal.onclick= function (){
    peliculas.push(input.value)
}
mostrarArreglo.onclick= function (){
    parrafo.textContent= peliculas
}
agregarInicio.onclick= function (){
peliculas.shift(input.value)
}

agregarInicio.onclick= function (){
    peliculas.unshift()
}

//ejercicio1//
/*
function CalcularPrecio (nafta1, nafta2, valor3, valor4)
*/