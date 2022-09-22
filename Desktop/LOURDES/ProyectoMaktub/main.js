let resultado = 0;
let resultadoAux = 0;

//Funcion calculo por producto.
function calcular(art) {
    let cantidad;
    let resultadocalcular;
    switch (art) {
        case "Agenda":
            alert("Las agendas cuestan $4500");
            cantidad = prompt("Ingrese la cantidad que desea");
            resultadocalcular = parseInt(cantidad) * 4500;
            break;
        case "Lapicera":
            alert("Las lapiceras cuestan $100");
            cantidad = prompt("Ingrese la cantidad que desea");
            resultadocalcular = parseInt(cantidad) * 100;
            break;
        case "Cuaderno":
            alert("Los cuadernos cuestan $1500");
            cantidad = prompt("Ingrese la cantidad que desea");
            resultadocalcular = parseInt(cantidad) * 1500;
            break;
        default:
            resultado = 0;
            alert("NO HA INGRESA UN ARTICULO VALIDO")
            break;
    }
    return (resultadocalcular);
}
//Función suma.
function suma(numeroA, numeroB) {
    return (numeroA + numeroB);
}

//Variables usadas
let NombreCliente = prompt("¿Cómo te llamas?");
alert("Hola " + NombreCliente + "!");
alert("En cual de los artículos estás interesado " + NombreCliente + "?" + "\n" + "Podés elegir: " + "\n" + "-Agenda\n- Cuaderno\n - Lapicera");
let Articulo = prompt("Ingrese uno de los artículos mencionados");
resultadoAux = calcular(Articulo);
resultado = suma(resultadoAux, resultado);
let condicion = prompt("Si quiere seleccionar otro articulo escriba la palabra OK");
//Condición loop
while (condicion == "OK") {
    alert("En que otro artículo estás interesado?" + "\n" + "Podés elegir: " + "\n" + "- Agenda \n -Cuaderno\n -Lapicera");
    let Articulo = prompt("Ingrese uno de los artículos mencionados");
    resultadoAux = calcular(Articulo);
    resultado = suma(resultadoAux, resultado);
    alert("Hasta acá llevas : " + resultado);
    condicion = prompt("Si quiere seleccionar otro articulo escriba la palabra OK\n. Si no presione un caracter aleatorio");
}
alert("El total de la compra es: " + resultado);
alert("Muchas gracias por tu compra" + NombreCliente + ",te esperamos!");