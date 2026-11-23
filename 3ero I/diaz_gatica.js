//se me asigno solo resolver los arreglos/arrays

peliculas =["Avatar","Expreso Polar", "Jumanji"];

let agregarF = document.querySelector("#btnEJ2b");
let agregarI = document.querySelector("#btnEJ2d");
let borrarF = document.querySelector("#btnEJ2a");
let borrarI = document.querySelector("#btnEJ2e");
let mostrar = document.querySelector("#btnEJ2c");
let parrafo = document.querySelector("#parrafoEx");
let input = document.querySelector("#inputEj2");

borrarF.onclick = function (){
    peliculas.pop()
}

borrarI.onclick = function(){
peliculas.shift()
}

agregarF.onclick = function(){
    peliculas.push(input.value)
    input.value = ""
}

agregarI.onclick = function(){
    peliculas.unshift(input.value)
    input.value = ""
}

mostrar.onclick = function(){
    parrafo.textContent = peliculas
}

//Hecho por Lara Diaz Gatica