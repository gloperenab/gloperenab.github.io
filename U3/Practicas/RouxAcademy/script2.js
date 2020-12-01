var contenido=document.getElementById("contenedorImagenes");

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

			var img = document.createElement("img");
			img.setAttribute("src", json[contador].imagen);
			
			contenido.appendChild(img);
			if(contador==2||contador==5){
				contenido.appendChild(document.createElement("br"));
			}
		}
		
		var parrafo = document.createElement("p");
		parrafo.setAttribute("style","text-align: right");
		
		var link=document.createElement("a");
		link.setAttribute("href","artists.html");
		link.appendChild(document.createTextNode("View Artists Info >>"));
		
		parrafo.appendChild(link);
		contenido.appendChild(parrafo);
		
	}
}
xhr.send();