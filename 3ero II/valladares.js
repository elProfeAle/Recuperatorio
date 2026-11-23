let BotonEliminar = document.querySelector('BotonEliminar')
let BotonEliminarI = document.querySelector('BotonEliminarI')
let BotonAgregarF = document.querySelector('BotonAgregarF')
let BotonAgregarI = document.querySelector('BotonAgregarI')
let MostrarArreglo = document.querySelector('MostrarArreglo')


let PeliculasArreglo

PeliculasArreglo = [ 'Cars','Cars 2', 'Cars 3']


 BotonEliminar() {
    BotonEliminar.onclick = function (){
        PeliculasArreglo.pop()
 }
    


 BotonEliminarI(){

    BotonEliminar.onclick = function (){
        PeliculasArreglo.shift()
    }
    

}
 BotonAgregarI(){

    BotonEliminar.onclick = function (){
        PeliculasArreglo.unshift(imput.value)
    }
    

}
 BotonAgregarF(){

    BotonEliminar.onclick = function (){
        PeliculasArreglo.push(imput.value)
    }
    

}
 MostrarArreglo(){
    MostrarArreglo.onclick = function (){
        alert()
    }
    
}

