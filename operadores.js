function resultadoOperacion(){
   let numUno = parseInt(document.getElementById("numeroUno").value);
   let numDos = parseInt(document.getElementById("numeroDos").value);
    numUno += numDos;
    
   document.getElementById("resultado").value = numUno ;
}
function incrementar(){
   let numUno =  parseInt(document.getElementById("numeroUno").value);
    numUno++;
   document.getElementById("numeroUno").value = numUno;

}
function restar(){
    let numDos =  parseInt(document.getElementById("numeroDos").value);
    numDos--;
   document.getElementById("numeroDos").value = numDos;
}

function comparacion(){
   let numUno = (document.getElementById("numeroUno").value);
   let numDos = (document.getElementById("numeroDos").value);
   
   let respuesta = !true ? "verdadero" : "falso";

   document.getElementById("resultado").value = respuesta;
}