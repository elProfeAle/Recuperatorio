//Buenos días, yo tenía que rendir arreglos (arrays)
//2:

let peliculas = ["Spider-man", "Batman", "Ratatouille"];

console.log (peliculas)

let boton1 = document.querySelector("#btnEJ2a")
let agregar = document.querySelector("#btnEJ2b")
let mostrar = document.querySelector("#btnEJ2c")
let agregar2 = document.querySelector("#btnEJ2d")
let eliminar2 = document.querySelector("#btnEJ2e")
let input = document.querySelector("#inputEj2")
let parrafo = document.querySelector("#párrafo")

boton1.onclick = function () { 
    //Faltan los parentesis para que funcione .pop()
    peliculas.pop
}
agregar.onclick = function () {
    peliculas.push(input.value)
}
mostrar.onclick = function () {
    parrafo.textContent = peliculas
}
agregar2.onclick = function () {
    peliculas.unshift(input.value)
}
eliminar2.onclick = function () {
    //Faltan los parentesis para que funcione .shift()
    peliculas.shift
}



