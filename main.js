
alert("Bienvenido al simulador interactivo para calcular los costos de mi trabajo")

while(true) {

    let canth=parseInt(prompt("Ingrese la cantidad de horas de trabajo"))

    if (canth!="") {

        break;
    }
    else{

        alert("No puso la cantidad de horas de trabajo")
        continue;
    }

}

let costo=parseInt(calcularCosto(canth));

alert("hola");
alert("El costo en base a las horas de trabajo es" + costo + "dolares")

let fp=formaPago();

let costoRecargo=0;

switch(fp) {

    case 1: alert("Debe pagar impuestos"); costoRecargo=calcularImpuestos(costo); break;
    case 2: alert("Debe pagarme en criptomonedas con un costo de comision"); costoRecargo=calcularComision(costo); break;
    default: alert("No me contrate como programador, no le conviene"); break;
}

let costoTotal= costo + costoRecargo;

alert("El costo total es" + costoTotal + "dolares, de los cuales" + costoRecargo + "corresponden a impuesto o comision")
//////////////////

function calcularCosto(costo) {

    return costo*25;

}

function calcularImpuestos(costo) {

    return costo*0.65; 


}

function calcularComision() {

    return costo*0.1;

}


function formaPago() {

    alert("hola");

    while(true) {

        let fp=parseInt(prompt("Como me va a pagar? 1- En blanco, 2- En negro"));


    
        if (fp!="") {
    
            break;
        }
        else{
    
            alert("No puso como me va a pagar")
            continue;
        }
    
    }

    return fp;
}

