function generarTabla(numero){

    let num = parseInt(numero);
    let tabla = document.getElementById("tabla");
     tabla.innerHTML = " ";
    for(let contador = 1; contador <= 10; contador++){
        let resultado = contador * num;
        
       let fila = tabla.insertRow(tabla.rows.length);
       let celda = fila.insertCell(0);
       celda.innerHTML = contador + " * "  + num + " = " +resultado; //1*5=5
    }
}

function generarTablaWhile(numero){
    let contador = 1;
    let num = parseInt(numero);
    let tabla = document.getElementById("tabla");
    while( contador <= 10){
        let resultado = contador * num;
        
       let fila = tabla.insertRow(contador - 1);
       let celda = fila.insertCell(0);
       celda.innerHTML = contador + " * "  + num + " = " +resultado; //1*5=5
       contador++;
    }
}

function generarTablaDoWhile(numero){
    let contador = 1;
    let num = parseInt(numero);
    let tabla = document.getElementById("tabla");
        let resultado = contador * num;
        do{  
       let fila = tabla.insertRow(contador - 1);
       let celda = fila.insertCell(0);
       celda.innerHTML = contador + " * "  + num + " = " +resultado; //1*5=5
       contador++;
       }

       while( contador <= 10);
    }

    function sumarNumero(numero){
        let numeroFinal = parseInt(numero);
        let numeroInicial = 1;
        let resultado = 0;  
        while(numeroInicial <= numeroFinal){
            if(numeroInicial % 2 == 0){
               numeroInicial++;
                  continue;   
        }
        resultado += numeroInicial;
        numeroInicial++;
        }
        document.getElementById("resultado").innerText = resultado;
    }
    function deletrearNombre(nombre){
        let resultado = " ";
        for(let letra of nombre){
             resultado += letra + "\n";
        }
        document.getElementById("deletreo").innerText = resultado;
    }  

    function deletrearNombreIn(nombre){
        let resultado = " ";
        for(const indice in nombre){
             resultado += indice + " = " + nombre[indice] + "\n";
        }
        document.getElementById("deletreo").innerText = resultado;
    } 