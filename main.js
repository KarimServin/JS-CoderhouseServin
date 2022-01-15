
let pregunta0=prompt("Que edad tiene?")

if(pregunta0<18) {
    alert("No trabajo con niños")
} else {

let pregunta=prompt("Para que empresa trabaja?")

while(pregunta=="") {
     pregunta=prompt("POR FAVOR, DIGAME PARA QUE EMPRESA TRABAJA?")
}

switch(pregunta){

    case "Google":
        alert("Cualquier trabajo que por el que ud. me contacte le va a costar 100 millones de dolares");
        break;
    case "Facebook":
        alert("Cualquier trabajo que por el que ud. me contacte le va a costar 50 millones de dolares");
        break;
    case "Amazon":
        alert("Cualquier trabajo que por el que ud. me contacte le va a costar 30 millones de dolares");
        break;
    case "Apple":
        alert("Cualquier trabajo que por el que ud. me contacte le va a costar 50 millones de dolares");
        break;    
    case "Apple":
        alert("Cualquier trabajo que por el que ud. me contacte le va a costar 50 millones de dolares");
        break; 
    default: 
        alert("No trabajo con empresas pequeñas. Debo mantener mi reputación.")        
}
}