
//DECLARACION DE VARIABLES: DOM
let bienvenido = document.getElementById("bienvenida");
let input= document.getElementById('input1');
let botoncito= document.getElementById('botoncito');

//EVENTO DE TIPO ON CLICK
botoncito.onclick = () =>{extraer()}


//FUNCION DE EVENTO: extraer() VA A EXTRAER EL DATO INTRODUCIDO EN EL INPUT
function extraer()
{
let dato = document.getElementById('input1').value;

bienvenido.remove();
input.remove();
botoncito.remove();

 
//SE LE PASA A LA FUNCION debienvenida(dato) EL DATO PARA QUE ESTA LO PUEDA MANIPULAR.
return debienvenida(dato);


}






//FUNCION QUE DARA LA BIENVENIDA DEL USUARIO, UTILIZANDO SU NOMBRE, Y LUEGO PERMITE BUSCAR LIBRO.
function debienvenida(nombre) {

let bienvenida= document.createElement("h5");

bienvenida.innerHTML = `Te damos la bienvenida, ${nombre}. Muchas gracias por visitar nuestro nuevo e-commerce. `;

document.body.append(bienvenida);

let consulta = document.createElement("input");
consulta.type = "text";
consulta.className = 'input1'; 
consulta.name = 'ingresotitulo';
consulta.placeholder = "Ingrese en este lugar el titulo que desea consultar";
consulta.size= 100;
document.body.append(consulta);



let btn = document.createElement("button");
btn.innerHTML = "BUSCAR TITULO";
document.body.appendChild(btn); //(REVISAR APPENDCHILD)
btn.id='botoncito'; 

btn.onclick = () =>{buscar(document.getElementsByClassName('input1')[0].value)} //LA FUNCION BUSCAR SE ENCUENTRA AL FINAL DEL JS

}






 
// AQUI VIENE LA PARTE DE OBJETOS ///////////////////////////////////////////////////////////
// CLASE LIBRO
class Libro {
//FUNCION CONSTRUCTORA
    constructor(autor,titulo,precio,stock,origen) {
        this.autor = autor.toUpperCase();
        this.titulo = titulo.toUpperCase();
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.origen = origen.toUpperCase();
    }

//// FUNCION SUMAR IMPUESTO
    sumarImpuesto() { 
        if (this.origen==='ARGENTINA') {
           //EL PRODUCTO ES NACIONAL Y SE LE APLICA SOLAMENTE IVA
          this.precio=this.precio * 1.21;

        } else {

            //AL PRODUCTO SE LE APLICA EL IVA + UN IMPUESTO DE 65% POR SER IMPORTADO

            this.precio=this.precio * 1.65 + precio*0.21;

        }
    

          return this.precio;
    
        }

//// FUNCION VENDER: REDUCE EL STOCK EN 1

    vender() {

        if(this.stock>0)  {

    this.stock=this.stock - 1;

    return(`Stock actual luego de vender: ${this.stock}`);

  
    } else {

      return("no se puede vender. No disponemos de stock");

    }

}

}

// CREACION DE OBJETOS Y ARRAY DE OBJETOS

let libro1 = new Libro('GEORGE ORWELL','1984',980,10,'ARGENTINA');
let libro2 = new Libro('ADAM SMITH','La riqueza de las naciones',1590,10,'ARGENTINA');
let libro3 = new Libro('VARGAS LLOSA','La ciudad y los perros',1350,5,'PERU');
let libro4 = new Libro('STEWART','Calculo en varias variables',5390,2,'MEXICO');


let libros = [libro1,libro2,libro3,libro4];


// FUNCION BUSCAR

function buscar(title) {

title=title.toUpperCase();

let pr=0;
let st=0;

    //RECORRE EL ARRAY DE INSTANCIAS DECLARADO ANTERIORMENTE
for(const libro of libros) {
  
 
  if (title==libro.titulo) {
  //SI COINCIDE CON ALGUN MODELO EN EL SISTEMA, PR VA A ALMACENAR EL PRECIO CORRESPONDIENTE, Y ST EL STOCK.
      pr=libro.precio;
      st=libro.stock;
      break;
     }
  
  }
  
  

  if(pr !==0 && st!==0) {
  
  
 
    let info= document.createElement("h5");
   info.innerHTML = `El libro que usted consultó, ${title}, tiene un valor de $${pr} y su stock actual es de ${st}`;
   document.body.append(info);
 
  
  
  } else {
  
    let info= document.createElement("h5");
    info.innerHTML = `No hemos podido encontrar el modelo que usted consultó o no disponemos de stock`;
   document.body.append(info);
   
  
  //COMO NO PUDO ENCONTRAR EL MODELO, PR Y ST SIGUEN EN VALOR 0 COMO SE INICIALIZARON.
  
  }
  } 




