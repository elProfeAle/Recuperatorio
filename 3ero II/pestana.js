//Ejercicio2
let btn1 = document.querySelector('#btnEJ2a')
let btn2 = document.querySelector('#btnEJ2b')
let btn3 = document.querySelector('#btnEJ2c')
let btn4 = document.querySelector('#btnEJ2d')
let btn5 = document.querySelector('#btnEJ2e')
let input = document.querySelector('#inputEj2')
let p = document.querySelector('#parrafo1')

let peliculas = ["nemo" , "shrek" , "frozen"]

btn1.onclick = function (){
    peliculas.pop()
}



btn2.onclick = function (){
   peliculas.push (input.value)
}


btn3.onclick = function (){
 p.textContent =( productos)

}


btn4.onclick = function (){
     peliculas.unshift(input.value)
}


btn5.onclick = function (){
    peliculas.shift()
}
