
// CLASE LIBRO
class Libro {
//FUNCION CONSTRUCTORA
    constructor(autor,titulo,precio,stock,origen,genero,img,cantidad) {
        this.autor = autor.toUpperCase();
        this.titulo = titulo
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.origen = origen.toUpperCase();
        this.genero = genero;
        this.img = img;
        this.cantidad =cantidad;
    }


}

// CREACION DE OBJETOS LIBRO

let libro1 = new Libro('GEORGE ORWELL','1984',980,10,'ARGENTINA','NOVELA','...',0);
let libro2 = new Libro('ADAM SMITH','La Riqueza de las Naciones',1590,10,'ARGENTINA','ECONOMIA','...',0);
let libro3 = new Libro('VARGAS LLOSA','La ciudad y los perros',1350,5,'PERU','NOVELA','...',0);
let libro4 = new Libro('STEWART','Calculo en una Variable',5390,3,'MEXICO','TECNICOS','...',0);
let libro5 = new Libro('STEWART','Calculo en Varias Variables',5390,2,'MEXICO','TECNICOS','...',0);
let libro6 = new Libro('SOMMERVILLE','Ingeneria en Software',4390,2,'MEXICO','TECNICOS','...',0);
let libro7 = new Libro('Serway','Fisica I',5390,2,'MEXICO','TECNICOS','...',0);
let libro8 = new Libro('Serway','Fisica II',5390,2,'MEXICO','TECNICOS','...',0);
let libro9 = new Libro('Sears Zemansky','Fisica para Ingenieros',5390,2,'MEXICO','TECNICOS','...',0);
let libro10 = new Libro('JAVIER MILEI','Desenmascarando la Mentira Keynesiana',2000,2,'ARGENTINA','ECONOMIA','...',0);
let libro11 = new Libro('Eduardo Galeano','Las Venas Abiertas de America Latina',1000,2,'ARGENTINA','POLITICA','...',0);
let libro12 = new Libro('Hayek','La Fatal Arrogancia',3000,2,'ARGENTINA','ECONOMIA','...',0);
let libro13 = new Libro('Dante Aligheri','La Divina Comedia',955,4,'ARGENTINA','CLASICOS','...',0);
let libro14 = new Libro('PLATON','La Republica',955,5,'ARGENTINA','CLASICOS','...',0);
let libro15 = new Libro('JK Rowling','Harry Potter y el Prisionero de Azkaban',2340,5,'BRASIL','NOVELA','...',0);
let libro16 = new Libro('Antonio de Saint-Exupery','El Principito',990,10,'ARGENTINA','NOVELA','...',0);

//ARRAY CON TODOS LOS LIBROS

let libros = [libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9,libro10,libro11,libro12,libro13,libro14,libro15,libro16];

//SE DECLARA CARRITO COMO ABSTRACCION DE CARRITO DE COMPRAS: VA A SER UN ARRAY QUE EMPIECE VACIO. 
let carrito=[];
let carritoTotal=0 //

const total = document.getElementById('preciototal');
//SE OBTIENE EL CONTENEDOR DE PRODUCTOS DE CATALOGO.HTML
const contenedorProductos = document.getElementById('contenedor-productos');
const itemscarrito = document.getElementById('itemscarrito');

desplegarCatalogo(libros);



// CATALOGO: ITERACION OBJETOS, VA A MOSTRAR LAS CARDS CON LOS PRODUCTOS


function desplegarCatalogo(array) {
    contenedorProductos.innerHTML =''; //SE ASEGURA QUE EL CONTENEDOR EMPIECE SIN NADA

for (const libro of array) { //LOS OBJETOS QUE SE RECORREN DEL ARRAY DE LIBROS SON OBJETOS LLAMADOS LIBRO
    let div = document.createElement('div'); //SE CREA EL APARTADO DE ETIQUETA DIV 
    div.className = 'producto';
    div.innerHTML += `<div class="card m-3" style="width: 25rem">
    <img src="${libro.img}" class="card-img-top" alt="imagen">
    <div class="card-body text-center">
      <h5 class="card-title text-dark text-center">${libro.titulo}</h5>
      <p class="card-title text-dark">${libro.autor}</p>
      
      <p class="car-text text-dark">$ ${libro.precio}</p>
      <button href="#" id="botonAgregar${libro.titulo}" class="btn btn-dark">Comprar</button>
    </div>
  </div>`
                    
    contenedorProductos.appendChild(div);

    


    let btnAgregar = document.getElementById(`botonAgregar${libro.titulo}`)
// console.log(btnAgregar)

btnAgregar.addEventListener('click',()=>{

    agregarCarrito(libro) 
})
}

}





// FUNCION QUE SUMA AL TOTAL AQUELLO QUE EL CLIENTE PUSO EN EL CARRITO

function sumarTotal(libro) {

  total.innerHTML='';
  carritoTotal=carritoTotal+libro.precio;


  if (carritoTotal>=3500){

    let n=document.createElement('p');
    n.innerHTML=`$${carritoTotal} ENVIO GRATIS`;
    total.appendChild(n);

  } else {
  let n=document.createElement('p');
  n.innerHTML=`$${carritoTotal}`;
  total.appendChild(n);
  }

}

// FUNCION QUE RESTA DEL TOTAL AQUELLO QUE EL CLIENTE SACO DEL CARRITO


function restarTotal(libro) {

  total.innerHTML='';
  carritoTotal=carritoTotal-(libro.precio*(libro.cantidad));


  if (carritoTotal>=3500){

    let n=document.createElement('p');
    n.innerHTML=`$${carritoTotal} ENVIO GRATIS`;
    total.appendChild(n);

  } else {
  let n=document.createElement('p');
  n.innerHTML=`$${carritoTotal}`;
  total.appendChild(n);
  }

}





// FUNCION QUE AGREGA OBJETO AL CARRITO








function agregarCarrito(libro) {
  let repetido = carrito.find(objeto => objeto.titulo == libro.titulo)
  if(repetido){
  
      repetido.cantidad = repetido.cantidad + 1
      document.getElementById(`cantidad${libro.titulo}`).innerHTML = `<th scope="row" id='cantidad${libro.titulo}'>${libro.cantidad}</th> ` 
      sumarTotal(libro);


  } else{
  sumarTotal(libro);
  
    carrito.push(libro)
    libro.cantidad=1
    let div = document.createElement('tr'); //SE CREA EL APARTADO DE ETIQUETA tr 
    div.className = 'producto';
    div.innerHTML += `<tr>
    <th scope="row" id='cantidad${libro.titulo}'>${libro.cantidad}</th> 
    <td>${libro.titulo}</td>
    <td>${libro.autor}</td>
    <td>$ ${libro.precio}</td>
    <button href="#" id="remove${libro.titulo}" class="btn btn-dark m-1"><span class="textred">X</span></button>
    </tr>`
      
    itemscarrito.appendChild(div);

    let removebutton = document.getElementById(`remove${libro.titulo}`)

    removebutton.addEventListener('click',()=>{
    removebutton.parentElement.remove()                         
      carrito = carrito.filter(book => book.titulo != libro.titulo)
      restarTotal(libro);
  })
}
}

localStorage.setItem('carrito', JSON.stringify(carrito));
























//ENTREGA OPERADORES AVANZADOS
const financiacionCredito = [3,6,9];
const combined = [1,2,4, ...financiacionCredito,12];
console.log('Usted puede pagar  en ' + combined + ' cuotas sin interes');

function reportarFaltaStock(libros) {

  for(const libro of libros) {

if (libro.stock==0 || precio==0) {

  console.log(`Debemos verificar este articulo:  ${libro.titulo}` );

}

    }

}