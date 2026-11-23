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
    //bien
    peliculas.pop ()
}
                        //Porque esta es input.value ahi?
agregaralfinal.onclick =  function (input.value){
    peliculas.push ()
}

mostrar.onclick = function (){
    //Mostras solo el tamaño del arreglo 
    //Y en la consola, no parrafo
    console.log(peliculas.length)
}

agregaralinicio.onclick = function (){
    //Toystory es una variable o valor? Si es valor, va entre comillas
    peliculas.unshift (Toystory)
}

eliminar.onclick = function (){
    //Mismo error que el anterior, ademas de que shift no tiene que tener nada entre los parentesis
    peliculas.shift (Moana)
}


