let peliculas = [alien, duna, batman]
let eliminarultimo = document.querySelector ("#btnEJ2a")
let agregarpelicula = document.querySelector ("#btnEJ2b")
let mostrarpelicula = document.querySelector ("#btnEJ2c")
let agregarinicio = document.querySelector ("#btnEJ2d")
let eliminarprimero = document.querySelector ("#btnEJ2e")
let input = document.querySelector ("#inputEj2")

agregarinicio.onclick = function () {
    peliculas.unshift(input.value)
}

eliminarprimero.onclick = function () {
    peliculas.shift(input.value)
}

agregarpelicula.onclick = function () {
    peliculas.push(input.value)
}

eliminarultimo.onclick = function () {
    peliculas.pop(input.value)
}

mostrarpelicula.onclick = function () {
p1.textcontent = peliculas.length
}

//ejercicio1//
let preciototal = (filamento * kilos)
let PLA = 1500
let PETG = 2000
let ABS = 5500

function calcularprecio (kilos, filamento){
if (filamento = PLA) {
return ("buenas" + "tu filamento es" + filamento + "tus kilos serian" + kilos + "tu total seria" + preciototal
}
}


//la uno me cago la vida profe//