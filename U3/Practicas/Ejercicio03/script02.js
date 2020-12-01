var selectPais = document.getElementById('pais');
var selectEstado=document.getElementById("estado");
var selectMunicipio=document.getElementById("municipio");

function cargarContenidoEstados(){
	var idPaisSeleccionado = selectPais.value;
	
	selectMunicipio.setAttribute("disabled","true");
	
	if(idPaisSeleccionado!="seleccione"){
		var xhr=new XMLHttpRequest();
		xhr.open("GET","servidor.php?pais="+idPaisSeleccionado,true);
		
		xhr.onreadystatechange=function(){
			console.log(xhr.readyState);
			if(xhr.readyState==4 && xhr.status==200){
				console.log(xhr.responseText);
				var json = JSON.parse(xhr.responseText);
				console.log(json);

				//Borra el contenido previo del Select
				while (selectEstado.firstChild){
				  selectEstado.removeChild(selectEstado.firstChild);
				};
				
				//Le agrega el option por defecto "Seleccione..."
				var optionE=document.createElement("option");
				optionE.setAttribute("value","seleccione");
				optionE.appendChild(document.createTextNode("Seleccione..."));
				
				selectEstado.appendChild(optionE);
				
				//Le va agregando options conforme la cantidad de filas que se obtengan de la consulta
				for(var contador=0; contador<json.length;contador++){
					optionE=document.createElement("option");
					optionE.setAttribute("value",json[contador].id_estado);
					optionE.appendChild(document.createTextNode(json[contador].nombre));

					selectEstado.appendChild(optionE);
				}
				
				//Una vez cargado el select, lo habilita
				selectEstado.removeAttribute("disabled");
				
				//Le agrega el listener
				selectEstado.addEventListener('click', cargarContenidoMunicipios);
			}
		}
		xhr.send();
	} else {
		//Desabilita y borra el contenido de los select en caso de que en pais seleccione "Seleccionar..."
		selectEstado.setAttribute("disabled","true");
		while (selectEstado.firstChild){
		  selectEstado.removeChild(selectEstado.firstChild);
		};
		
		selectMunicipio.setAttribute("disabled","true");
		while (selectMunicipio.firstChild){
		  selectMunicipio.removeChild(selectMunicipio.firstChild);
		};
	}
}

function cargarContenidoMunicipios(){
	var idEstadoSeleccionado = selectEstado.value;

	if(idEstadoSeleccionado!="seleccione"){
		var xhr=new XMLHttpRequest();
		xhr.open("GET","servidor.php?estado="+idEstadoSeleccionado,true);
		
		xhr.onreadystatechange=function(){
			console.log(xhr.readyState);
			if(xhr.readyState==4 && xhr.status==200){
				var json = JSON.parse(xhr.responseText);
				console.log(json);

				//Borra el contenido previo del Select
				while (selectMunicipio.firstChild){
				  selectMunicipio.removeChild(selectMunicipio.firstChild);
				};
				
				//Le agrega el option por defecto "Seleccione..."
				var optionE=document.createElement("option");
				optionE.setAttribute("value","seleccione");
				optionE.appendChild(document.createTextNode("Seleccione..."));
				
				selectMunicipio.appendChild(optionE);
				
				//Le va agregando options conforme la cantidad de filas que se obtengan de la consulta
				for(var contador=0; contador<json.length;contador++){
					optionE=document.createElement("option");
					optionE.setAttribute("value",json[contador].id_municipio);
					optionE.appendChild(document.createTextNode(json[contador].nombre));

					selectMunicipio.appendChild(optionE);
				}
				
				//Una vez cargado el select, lo habilita
				selectMunicipio.removeAttribute("disabled");
				
			}
		}
		xhr.send();
	} else {
		//Desabilita y borra el contenido del select en caso de que en estado seleccione "Seleccionar..."
		selectMunicipio.setAttribute("disabled","true");
		while (selectMunicipio.firstChild){
		  selectMunicipio.removeChild(selectMunicipio.firstChild);
		};
	}
}
selectPais.addEventListener('click', cargarContenidoEstados);