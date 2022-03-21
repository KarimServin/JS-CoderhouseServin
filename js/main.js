
// CLASE LIBRO
class Libro {
  //FUNCION CONSTRUCTORA
      constructor(autor,titulo,precio,stock,origen,genero,img,cantidad) {
          this.autor = autor
          this.titulo = titulo
          this.precio = parseInt(precio);
          this.stock = parseInt(stock);
          this.origen = origen
          this.genero = genero;
          this.img = img;
          this.cantidad =cantidad;
      }
  
  }


  console.log("El catalogo")

let carrito=[]


carrito=JSON.parse(localStorage.getItem('carrito')) || []

console.log(carrito)



function guardarEnLocalStorage(carro) {
  //FUNCION QUE PERMITE GUARDAR LA LISTA DE PRODUCTOS EN CARRITO, EN LOCAL STORAGE.        
    localStorage.setItem('carrito', JSON.stringify(carro))     
  }
  
const contenedorProductos = document.getElementById('contenedor-productos'); //CONTIENE EL CATALOGO DE PRODUCTOS



fetch('../json/data.json')
.then( (resp) => resp.json() )
.then( (arregloLibros) => {
  desplegarCatalogo(arregloLibros);

}) //METODO FETCH QUE OBTIENE LOS PRODUCTOS DEL LOCAL STORAGE


function desplegarCatalogo(arregloLibros) {
  contenedorProductos.innerHTML =''; //SE ASEGURA QUE EL CONTENEDOR EMPIECE SIN NADA

    for (const libro of arregloLibros) { //LOS OBJETOS QUE SE RECORREN DEL ARRAY DE LIBROS SON OBJETOS LLAMADOS LIBRO
    let cartaProducto = document.createElement('div'); //SE CREA EL APARTADO DE ETIQUETA DIV 
    cartaProducto.className = 'producto';
    cartaProducto.innerHTML += `<div class="card m-2 mx-auto" style="width: 25rem">
    <img src="${libro.img}" class="card-img-top" alt="imagen">
    <div class="card-body text-center">
    <h5 class="card-title text-dark text-center">${libro.titulo}</h5>
    <p class="card-title text-dark">${libro.autor}</p>
    
    <p class="car-text text-dark">$ ${libro.precio}</p>
    <button href="#" id="botonAgregar${libro.id}" class="btn btn-dark">Comprar</button>
    </div>
    </div>`
                  
    contenedorProductos.appendChild(cartaProducto);


    let btnAgregar = document.getElementById(`botonAgregar${libro.id}`)
  
  
           btnAgregar.addEventListener('click',()=>{
            toastr.success(`Se agregó ${libro.titulo} de ${libro.autor} a su carrito`)
            guardarEnLocalStorage(libro);
               agregarCarrito(libro) 
          })    
   }
}

function agregarCarrito(libro) {
   
    let repetido=carrito.find(objeto => objeto.id == libro.id)
    
    if (repetido) {

      repetido.cantidad++;
      guardarEnLocalStorage(carrito);

    } else {
      
      libro.cantidad=1;
      carrito.push(libro)
      guardarEnLocalStorage(carrito);


    }
     


  



}