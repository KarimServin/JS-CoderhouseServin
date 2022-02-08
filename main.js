//CLASE Vehiculo CON LA FUNCION CONSTRUCTORA, Y DOS METODOS: sumarImpuestoAlLujo() Y vender()

class Vehiculo {
    
  constructor(marca,modelo,precio,stock) {
      this.marca = marca.toUpperCase();
      this.modelo = modelo.toUpperCase();
      this.precio = parseInt(precio);
      this.stock = parseInt(stock);


  }

 sumarImpuestoAlLujo() { 
    if (this.precio>3500000) {
        
      this.precio=this.precio * 1.20;
        
      return (`Precio actualizado con impuesto:  ${this.precio} `);

    }

  }
  vender(){

      if(this.stock>0)  {
      
          this.stock=this.stock - 1;
      
          return(`Stock actual luego de vender: ${this.stock}`);

   } else {

      return("no se puede vender. No disponemos de stock");

   }

 }


  

}

// AQUI SE DECLARAN LAS INSTANCIAS DE ESA CLASE VEHICULO

const auto1 = new Vehiculo('VW','JETTA14T',4000000,20);

const auto2 = new Vehiculo('VW','GOLFGTI',10000000,20);

const auto3 = new Vehiculo('TOYOTA','HILUX28TD',8000000,5);

const auto4 = new Vehiculo('FORD','MUSTANG50GT',20000000,2);



// SE GUARDA EN UN ARRAY LAS INSTANCIAS

const autos = [auto1,auto2,auto3,auto4];


cotizador();

// SIMULADOR: SE LE PIDE AL USUARIO QUE AUTO DESEA COTIZAR. SE IMPLEMENTA COMO FUNCION
function cotizador() {
let a1; //ESTA LA VOY A USAR PARA GUARDAR EL MODELO DE AUTO QUE EL USUARIO INGRESA 
let pr=0; //ESTA LA VOY A USAR PARA GUARDAR EL PRECIO DEL MODELO QUE EL USUARIO CONSULTA
let st=0; //ESTA LA VOY A USAR PARA GUARDAR EL STOCK DEL MODELO QUE EL USUARIO CONSULTA
let i=true; //VARIABLE DE CONTROL DE FLUJO


while(i)
{

  a1=prompt("Ingrese el modelo de auto que desea cotizar");
  

  if(a1!=null && a1!="") {

    i=false; //Se ingreso el modelo correctamente

  }  else {
    
    alert("Ud. no ingreso el modelo correctamente. Vuelva a intentarlo.");
  
  } 
}

a1 = a1.toUpperCase(); //DARA LO MISMO SI EL USUARIO LO INGRESA EN MAYUSCULA O MINUSCULA

//RECORRE EL ARRAY DE INSTANCIAS DECLARADO ANTERIORMENTE
for(const auto of autos) {

if (a1===auto.modelo) {
//SI COINCIDE CON ALGUN MODELO EN EL SISTEMA, PR VA A ALMACENAR EL PRECIO CORRESPONDIENTE, Y ST EL STOCK.
  pr=auto.precio;
  st=auto.stock;
  break;

   }

}


if(pr !==0 && st!==0) {


alert(`El modelo que usted consultó tiene un valor de $${pr} y su stock actual es de ${st}`);


} else {

alert(`No hemos podido encontrar el modelo que usted consultó o no disponemos de stock`);
//COMO NO PUDO ENCONTRAR EL MODELO, PR Y ST SIGUEN EN VALOR 0 COMO SE INICIALIZARON.

}
}


document.getElementById("boton").addEventListener("click", cotizar);
    function cotizar()
    {
   		 alert("Su cotización es en pesos argentinos");
    }	