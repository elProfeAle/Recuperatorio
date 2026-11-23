let eliminar = document.querySelector("#btnEJ2a")
let agregar = document.querySelector("#btnEJ2b")
let mostrar = document.querySelector("#btnEJ2c")
let agregar1 = document.querySelector("#btnEJ2d")
let eliminar1 = document.querySelector("#btnEJ2e")
let p = document.querySelector("p")
let peliculas = ["cars1","cars2","cars3"]

eliminar.onclick=function() {
    peliculas.pop()
}

function agregar() {
    let peliculas = document.querySelector("#inputEj2").value;
    peliculas.push(peliculas);
}


function agregar1() {
    let peliculas = document.querySelector("#inputEj2").value;
    peliculas.unshift(peliculas);
}


eliminar1.onclick=function() {
    peliculas.shift()
}

let ABS = 5500
function calculaPrecio(kilos,) {
    if (pla=1500) {
        PLA*kilos
    } if (PETG=2000) {
        PETG*kilos
    } else{
        ABS*kilos
}

return = calculaPrecio
