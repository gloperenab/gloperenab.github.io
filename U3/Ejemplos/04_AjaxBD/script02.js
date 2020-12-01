var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax(){
	var xhr=new XMLHttpRequest();
	let id=document.getElementById("id").value;
	
	xhr.open("GET","servidor.php?id="+id,true);
	
	xhr.onreadystatechange=function(){
		console.log(xhr.readyState);
		if(xhr.readyState==4 && xhr.status==200){
			var json = JSON.parse(xhr.responseText);
			alert(json.length);
			console.log(json);
			var contenido = document.getElementById('contenido');
			contenido.innerHTML="";
			contenido.innerHTML="ID: "+json[0].id +"<br>Nombre: "+json.nombre + "<br>Edad: " +json.edad+"<br>Direccion: "+json.direccion;
		}
	}
	xhr.send();
}

btnCargar.addEventListener('click', cargarContenidoAjax);