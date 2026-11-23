//ejercicio1
                            //Que hace cara variable? no se entiende
function Calcularfunctiones(nafta2, nafta3, v4, v5) {
//Porque multiplica por dos?
    let lasuma = (v4) * 2

    console.log('el cliente quiere 2 litros de nafta super' + 'y el precio total es' + lasuma)

    //No tenes que llamar a la función dentro de la función
    console.log(Calcularfunctiones('super', 'premium', 1500, 2000))
    return lasuma
}
//ejercicio2

let peliculas = ['intensamente', 'coraline', 'frozen']
let boton1 = document.querySelector('#btnEJ2a')
let boton2 = document.querySelector('#btnEJ2b')
let boton3 = document.querySelector('#btnEJ2c')
let input = document.querySelector('#inputEj2')

boton1.onclick = function () {
    peliculas.pop()
}

boton2.onclick = function () {
    peliculas.push(input.value)
}

boton3.onclick = function () {
    console.log(peliculas)
}
//Usas de nuevo boton1
boton1.onclick = function (){   
peliculas.unshift ('cenicienta')

}