
//actividad 2 de arreglos  indicada por el profe
let peliculas =['toy story','shrek','frozen']
let eliminarultimo = document.querySelector ("#btnEJ2a")
let agregarfinal = document.querySelector ("#btnEJ2b")
let mostrar = document.querySelector ("#btnEJ2c")
let agregarinicio = document.querySelector ("#btnEJ2d")
let eliminarinicio = document.querySelector("#btnEJ2e")
let input = document.querySelector ("#inputEj2")
 
eliminarultimo.onclick = function(){
    peliculas.pop()
    
}
agregarfinal.onclick = function(){
    peliculas.push(input.value)
}
mostrar.onclick = function(){
    console.log(peliculas)
}
agregarinicio.onclick =function(){
    peliculas.unshift(input.value)
}
eliminarinicio.onclick = function(){
    peliculas.shift()
}