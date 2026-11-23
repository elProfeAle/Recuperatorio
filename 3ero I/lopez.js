//Actividad 2

let peliculas = []
let peliculas2 = ['Moana','Blancanieves','Avatar' ]


let eliminarultimo = document.querySelector ("#btnEJ2a")
let agregaralfinal = document.querySelector ("#btnEJ2b")
let mostrar = document.querySelector ("#btnEJ2c")
let agregaralinicio = document.querySelector ("#btnEJ2d")
let eliminar = document.querySelector ("#btnEJ2e")
let input = document.querySelector ("inputEj2")


eliminarultimo.onclick = function (){
    peliculas.pop ()
}

agregaralfinal.onclick =  function (input.value){
    peliculas.push ()
}

mostrar.onclick = function (){
    console.log(peliculas.length)
}

agregaralinicio.onclick = function (){
    peliculas.unshift (Toystory)
}

eliminar.onclick = function (){
    peliculas.shift (Moana)
}


