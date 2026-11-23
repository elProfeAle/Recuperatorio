ejercicio 2 
let libros = ['El principito', 'Arsene lupin', 'The walking dead']
let botoneliminarult = document.querySelector('#btnEJ2a')
let botonagregrarfin = document.querySelector('#btnEJ2b')
let botonmostrar = document.querySelector('#btnEJ2c')
let botonagregarinicio = document.querySelector('#btnEJ2d')
let botoneliminarprimero = document.querySelector('#btnEJ2e')
let input = document.querySelector('#inputEj2')

botoneliminarult.onclick=function  (){libros.pop()}
botonagregrarfin.onclick =function  (){libros.push()}
botonmostrar.onclick = function  (){libros.length}
botonagregarinicio.onclick =function  (){libros.shift(input.Value)}
botoneliminarprimero.onclick =function (){libros.unshift()}


Ejercicio 1 
function calcularprecio(Kilos, Filamento)
{
    function calcularPrecio(Kilos, Filamento) {
        let precioPorKilo;
        if (tipoFilamento = "PLA") {
            precioPorKilos = 1500;
        } else if (tipoFilamento = "PETG") {
            precioPorKilos = 2000;
        } else if (tipoFilamento === "ABS") {
            precioPorKilos = 5200;
        } else {
            return "tipo de filamento no valido";
        }
        let preciototal = Kilos * precioPorKilo;
        return preciototal;
    }
    console.log(calcularprecio(2, "PLA"));
    console.log(calcularprecio(3, "PETG"))
    console.log(calcularprecio(1, "ABS"));
    }