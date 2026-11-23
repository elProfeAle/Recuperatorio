function calcularPrecio(tipoNafta, litros) {

    if (tipoNafta == "super") {
        //Se debe declara la variable antes del if
        //Porque como la escribis ahora, solo la declaras o creas
        //Cuando la condición se cumple
        let resultado = 1500 * litros
        console.log("El tipo de nafta es:" + "super" + "tiene un precio total de:" + resultado)
    } else if (tipoNafta == "premium"){
        resultado == 2000 * litros
        console.log("El tipo de nafta es:" + "premium" + "tiene un precio total de:" + resultado)
    }
}
 calcularPrecio("super", 10)
 calcularPrecio("premium", 20)
  