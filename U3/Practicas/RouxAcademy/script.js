var contenido=document.getElementById("artistas");

var xhr=new XMLHttpRequest();

xhr.open("GET","servidor.php",true);

xhr.onreadystatechange=function(){
	console.log(xhr.readyState);
	if(xhr.readyState==4 && xhr.status==200){

		var json = JSON.parse(xhr.responseText);
		console.log(json);

		//Borra el contenido previo del div
		contenido.innerHTML="";
		
		//Le va agregando artistas conforme la cantidad de filas que se obtengan de la consulta
		for(var contador=0; contador<json.length;contador++){
			var titulo=document.createElement("h3");
			titulo.appendChild(document.createTextNode(json[contador].nombre));
			
			var desc = document.createElement("p");
			
			var img = document.createElement("img");
			img.setAttribute("src", json[contador].imagen);
			
			desc.appendChild(img);
			
			desc.appendChild(document.createTextNode(json[contador].descripcion));

			contenido.appendChild(titulo);
			contenido.appendChild(desc);
		}
	}
}
xhr.send();