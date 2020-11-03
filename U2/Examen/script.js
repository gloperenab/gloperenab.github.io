function calcular(){
	var tablaNumero=document.getElementById("tabla").value;
	var cantidadResultados = document.getElementById("resultados").value;
	var errorNumero = false;
	var errorResultados = false;
	if (tablaNumero<1||tablaNumero>50){
		document.getElementById("error_tabla").innerHTML="<font style='color:red'>El número debe ser entre 1 y 50</font>";
		errorNumero=true;
	} else {
		document.getElementById("error_tabla").innerHTML="";
		errorNumero=false;
	}
	
	if (cantidadResultados<1||cantidadResultados>20){
		document.getElementById("error_resultados").innerHTML="<font style='color:red'>El número debe ser entre 1 y 20</font>";
		errorResultados=true;
	} else {
		document.getElementById("error_resultados").innerHTML="";
		errorResultados=false;
	}
	var res=document.getElementById("mostrarTabla");
	res.innerHTML="";
	
	if(errorNumero==false&&errorResultados==false){
		var i = 1;
		
		var tabla = document.createElement("table");
		tabla.setAttribute("border","1px solid");
		var fil = document.createElement("tr");
		
		var col1 = document.createElement("th");
		col1.innerText="Numero";
		var col2 = document.createElement("th");
		col2.innerText="Multiplicador";
		var col3 = document.createElement("th");
		col3.innerText="Resultado";
		
		fil.appendChild(col1);
		fil.appendChild(col2);
		fil.appendChild(col3);
		
		tabla.appendChild(fil);
		
		while(i<=cantidadResultados){
			
			var fil = document.createElement("tr");
		
			var col1 = document.createElement("td");
			col1.innerText=tablaNumero;
			var col2 = document.createElement("td");
			col2.innerText=i;
			var col3 = document.createElement("td");
			col3.innerText=(tablaNumero*i);
			
			fil.appendChild(col1);
			fil.appendChild(col2);
			fil.appendChild(col3);
			
			tabla.appendChild(fil);
			
			i++;
		}
		res.appendChild(tabla);
	}
}