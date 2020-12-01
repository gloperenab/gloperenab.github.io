var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax(){
	var xhr=new XMLHttpRequest();
	xhr.open("GET","servidor.php",true);
	
	xhr.onreadystatechange=function(){
		console.log(xhr.readyState);
		if(xhr.readyState==4 && xhr.status==200){
			var json = JSON.parse(xhr.responseText);
			var contenido = document.getElementById('contenido');
			contenido.innerHTML=json.backend;
		}
	}
	xhr.send();
}

btnCargar.addEventListener('click', cargarContenidoAjax);