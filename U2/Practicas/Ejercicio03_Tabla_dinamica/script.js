function tabla(){
	
	let divTabla  = document.getElementById("tablaDiv");
	let tabla = document.createElement("table");
	var fila;
	var columna;
	
	let numero = document.getElementById("numero").value;
	let multiplicador = document.getElementById("multiplicador").value;
	var contador=0;
	var num;
	
	//Cabecera de la tabla
	fila = document.createElement("tr");
	
	columna = document.createElement("th");
	textoColumna = document.createTextNode("Numero");
	columna.appendChild(textoColumna);
	columna.setAttribute("class","cabeceraTabla");
	fila.appendChild(columna);
	
	columna = document.createElement("th");
	textoColumna = document.createTextNode("Multiplicador");
	columna.appendChild(textoColumna);
	columna.setAttribute("class","cabeceraTabla");
	fila.appendChild(columna);
	
	columna = document.createElement("th");
	textoColumna = document.createTextNode("Resultado");
	columna.appendChild(textoColumna);
	columna.setAttribute("class","cabeceraTabla");
	fila.appendChild(columna);
	
	tabla.appendChild(fila);
	
	//Contenido de la tabla
	while (contador<multiplicador){
		num=numero*(contador+1);
		
		fila = document.createElement("tr");
		
		columna = document.createElement("td");
		textoColumna = document.createTextNode(numero);
		columna.appendChild(textoColumna);
		columna.setAttribute("class","cabeceraTabla2");
		fila.appendChild(columna);
		
		columna = document.createElement("td");
		textoColumna = document.createTextNode(contador+1);
		columna.appendChild(textoColumna);
		fila.appendChild(columna);
		
		columna = document.createElement("td");
		textoColumna = document.createTextNode(num);
		columna.appendChild(textoColumna);
		fila.appendChild(columna);
		
		tabla.appendChild(fila);
		contador++;
	}
	tabla.setAttribute("border","1px");
	divTabla.appendChild(tabla);
	
}

function limpiar(){
	let divTabla  = document.getElementById("tablaDiv");
	let numero = document.getElementById("numero");
	let multiplicador = document.getElementById("multiplicador");
	
	divTabla.innerHTML="";
	numero.value="";
	multiplicador.value="";
}

