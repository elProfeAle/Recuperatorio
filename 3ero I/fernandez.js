//yo rindo nada mas funciones

let tipoNafta = document.querySelector('#tipoNafta')
function calcularPrecio(nafta, litros) {
    let precio;
    if (nafta == "super") {
        precio = 1500;
    } else if (nafta == "premium") {
        precio = 2000;
    }
    let calcular = precio * litros;
    console.log("Tipo de nafta: " + tipoNafta + ", precio total de la carga: " + calcular + " de pesos");
}

calcularPrecio("super", 10);
calcularPrecio("premium", 20);