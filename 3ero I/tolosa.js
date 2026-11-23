//Bien declarada la función
/*
function calcularPrecio (litros,tiponafta) {
    //Multiplicas un numero por un texto
    let precioTotal = litros * tiponafta;
    //Mal definida la condición
    //Deberia ser if(tiponafta == 'super') o si no (tiponafta == 'premium')
    if (premium,super) {
        //Falta el calculo del total


    }
    calcularPrecio ( 10 , 'super')
    calcularPrecio (20 , 'premium')
}
console.log (calcularPrecio( 2 , 10 , 20));
*/


//actividad 2
//Bien declaradas las variables, aunque falta el input
let peliculas = ['aladin' , 'toy story' , 'juego de gemelas']
let botonEliminar = document.querySelector ('#btnEJ2a')
let botonAgregar = document.querySelector ('#btnEJ2b')
let botonMostrar = document.querySelector ('#btnEJ2c')
let botonAInicio = document.querySelector ('#btnEJ2d')
//hay una comilla sobrando despues de 2e
let botonEliminarPrimero = document.querySelector ('#btnEJ2e"')

botonEliminar.onclick = function () {
    let peliculaEliminada = pelicula.pop ('juego de gemelas');
    //MEnsaje no esta declarada con el resto de variables
    mensaje.textContent = peliculaEliminada + 'eliminado'
}
botonAgregar.onclick = function () {
    //tenias que agregar desde un input
    let peliculaAgregada = pelicula.push ('#la bella y la bestia');
    mensaje.textContent = peliculaAgregada + 'agregada correctamente'
}
 
botonMostrar.onclick = function () {
    //Tenias que mostrar el listado de peliculas no la cantidad
    let mostrarpeliculas = pelicula.length 
    mensaje.textContent = mostrarpeliculas + 'pelis actuales'
}
botonAInicio.onclick = function () {
    //Faltan parentesis a unshift y el input
    let agregarInicio = pelicula.unshift
    mensaje.textConten = peliculaAgregadaInicio + 'agregada al inicio crrectamente'

}
botonEliminarPrimero.onclick = function () {
    //faltan parentesis al shift
    let eliminarPrimero = pelicula.shift
    mensaje.textContent = peliculaEliminadaInicio + 'se elimino el primero'

}
