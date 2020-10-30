function calcularTabla(){
	var numero=document.getElementById("tabla").value;
	var resultados = document.getElementById("resultados").value;
	var errorUno = false;
	var errorDos= false;
	
	if (numero<1||numero>50){
		document.getElementById("error_tabla").innerHTML="Eliga un numero entre 1 y 50";
		errorUno=true;
	}
	
	if (resultados<1||resultados>20){
		document.getElementById("error_resultados").innerHTML="El limite de resultados es entre 1 y 20";
		errorDos=true;
	}
	if(errorUno==false){
		document.getElementById("error_tabla").innerHTML="";
	}
	if(errorDos==false){
		document.getElementById("error_resultados").innerHTML="";
	}
	
	var mostrar=document.getElementById("mostrar");
	mostrar.innerHTML="";
	
	if(errorUno==false&&errorDos==false){
		var contador = 1;
		
		var tabla = document.createElement("table");
		tabla.setAttribute("border","1");
		
		while(contador<=resultados){
			
			var fila = document.createElement("tr");
		
			var columna1 = document.createElement("td");
			columna1.innerText=numero;
			var columna2 = document.createElement("td");
			columna2.innerText=contador;
			var columna3 = document.createElement("td");
			columna3.innerText=numero*contador;
			
			fila.appendChild(columna1);
			fila.appendChild(columna2);
			fila.appendChild(columna3);
			
			tabla.appendChild(fila);
			
			contador++;
		}
		mostrar.appendChild(tabla);
	}
}