let PLA = 1500  
let PETG = 2000 
let ABS = 5500
function calcularprecio(kilos,tipo){
    let Total = (tipo * kilos)
    if (PLA == tipo ){

    }
    
    return "Hola el filamento que compraste es" + tipo + "y la cantidad de kilos son" + kilos + "el total es de" + Total

}


let libros = [It, Cars, StarWarsep1]
let botonultimo = document.querySelector("#btnEJ2a")
let botonprimero = document.querySelector("#btnEJ2e")
let botonagregarfinal = document.querySelector("#btnEJ2b")
let botonagregarinicio = document.querySelector("#btnEJ2d")
let botonmostrar = document.querySelector("#btnEJ2c")
let input = document.querySelector("#inputEj2")
let p1 = document.querySelector("#p1EJ")

botonagregarinicio.onclick = function(){
    libros.unshift(input.value);
}

botonmostrar.onclick = function(){
    p1.textContent = libros.length; 

}

botonagregarfinal.onclick = function(){
    libros.push(input.value);
}

botonultimo.onclick = function(){
    libros.pop(input.value);
}

botonprimero.onclick = function(){
    libros.shift(input.value);
}

//Si me aprobas admito que me gusta Lolo
//Solo un 6 porfavor necesito pasar bien la navidad ya de por si me llevo mates no necesito añadir mas materias a la lista