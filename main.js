
let bienvenido = document.getElementById("bienvenida");
let input= document.getElementById('input1');
let botoncito= document.getElementById('botoncito');

botoncito.onclick = () =>{extraer()}

function extraer()
{
let dato = document.getElementById('input1').value;

bienvenido.remove();
input.remove();
botoncito.remove();

debienvenida(dato);


}

function debienvenida(nombre) {

let bienvenida= document.createElement("h5");

bienvenida.innerHTML = `Te damos la bienvenida, ${nombre}. Muchas gracias por visitar nuestro nuevo e-commerce. `;

document.body.append(bienvenida);

}

