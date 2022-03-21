let carrito=[]
let sumaTotal = 0
let resumen = document.getElementById("ResumenDeCompra")
let total = document.createElement('h5'); 

let vacio=document.createElement('h2')
let cont = document.getElementById('contenedorCarrito')
let tabl = document.getElementById('tabla')

carrito=JSON.parse(localStorage.getItem('carrito'))


const itemscarrito = document.getElementById('itemscarrito');




if(carrito.length==0) {

    
    carritoVacio()


} else {

  cargarCarrito()
  actualizarTotal()

  }




function cargarCarrito() {

for(libro of carrito) {
    
    
           
    let div = document.createElement('tr'); //SE CREA EL APARTADO DE ETIQUETA tr 
    div.className = 'producto';
    div.innerHTML += `<tr>
    <th scope="row" id='cantidad${libro.titulo}'>${libro.cantidad}</th> 
    <td>${libro.titulo}</td>
    <td>${libro.autor}</td>
    <td>$ ${libro.precio}</td>
    <button href="#" id='remover${libro.id}' class="btn btn-dark m-1"><span class="textred">X</span></button>
    </tr>`
      
    itemscarrito.append(div);
     
    sumaTotal=sumaTotal+(libro.cantidad*libro.precio);

    let removebutton = document.getElementById(`remover${libro.id}`)

     

    let libroid = libro.id
    let title = libro.titulo
    let autorr = libro.autor
    let cantidadd=libro.cantidad
    let price = libro.precio

    removebutton.addEventListener('click',()=>{
        

        console.log(libroid)
        carrito = carrito.filter(book => book.id != libroid) 
        removebutton.parentElement.remove()   
        sumaTotal=sumaTotal-(cantidadd*price);
        guardarEnLocalStorage(carrito)
        toastr.error(`Se quitó ${title} de ${autorr} a su carrito`)
        if(carrito.length==0) {

            carritoVacio()
            total.remove()
        } else {
        
            actualizarTotal();
            
        }

    })
    

}

}



function actualizarTotal() {
    if (sumaTotal>3500) {
    total.innerHTML = `<h5> Total: $${sumaTotal} + <span class="textgreen"> ENVÍO GRATIS</span> </h5>
    <button class="btn btn-dark">Comprar</button>
    <a href="https://www.mercadopago.com.ar/home" class="btn btn-dark">Comprar</a>`  
    } else {
        total.innerHTML = `<h5> Total: $${sumaTotal} </h5>
        <a href="https://www.mercadopago.com.ar/home" class="btn btn-dark">Comprar</a>` 
        
    }
    
    
    resumen.appendChild(total);
    
}

function guardarEnLocalStorage(carro) {
    //FUNCION QUE PERMITE GUARDAR LA LISTA DE PRODUCTOS EN CARRITO, EN LOCAL STORAGE.        
      localStorage.setItem('carrito', JSON.stringify(carro))     
      
    }



function carritoVacio() {
    tabl.remove()
    vacio.innerHTML= `<h2 class="text-center"> Su carrito está vacío. <h2> 
    <h5 class="text-center"> ¿Por qué no agrega algún libro de nuestro catálogo?</h5> 
    <img class="img-fluid rounded mx-auto d-block" style="width:10%;" src="../multimedia/carritovacio.png">
    `
    cont.appendChild(vacio)
    
}