function iniciar(){
	var correo = document.getElementById("email").value;
	var contrasenia = document.getElementById("password").value;
	if(correo=="admin@coollife.com"&&contrasenia=="admin123"){
		alert("Sesión iniciada");
		window.location="principal.html";
	}
}

function publicar(){
	var mandar="180";
	this.agrandar(mandar);
	var publicacion = document.getElementById("contenidoPublicar");
	var espacio= document.getElementById("paraPublicar");
	if(publicacion.value!=""&&publicacion.value!="undefined"){
		
		var nombreUsuario="El Admin";
		var fotoUsuario="img/x2.jpg";
		
		var imagen=document.createElement("img");
		imagen.setAttribute("src",fotoUsuario);
		imagen.setAttribute("width","50px");
		imagen.setAttribute("style","border-radius: 150px; vertical-align:middle;box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);");
		var nombre=document.createElement("font");
		nombre.setAttribute("style","vertical-align: middle;padding:7px 10px; background-color:rgb(177, 0, 42); font-weight:bold;color:white; border-radius:18px;box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);");
		nombre.appendChild(document.createTextNode(nombreUsuario));
		
		var parrafo=document.createElement("p");
		parrafo.setAttribute("style","margin-left:50px; border-bottom:1px solid; padding:2px 10px; margin-top:1px;margin-bottom:10px;");
		parrafo.appendChild(document.createTextNode(publicacion.value));
		
		var divSeccion=document.createElement("div");
		divSeccion.setAttribute("style","text-align:center");
		
			var comentar=document.createElement("font");
			comentar.setAttribute("style","font-style:italic; color: rgb(215,79,67); text-align:center; font-weight:bold; vertical-align: middle; margin-right:30px; margin-bottom:40px;")
			comentar. appendChild(document.createTextNode("Comentar..."));
			
			var reaccion=document.createElement("img");
			reaccion.setAttribute("src","img/reaccion.png");
			reaccion.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
			
			var favoritos=document.createElement("img");
			favoritos.setAttribute("src","img/favoritos.png");
			favoritos.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
			
			var top=document.createElement("img");
			top.setAttribute("src","img/top.png");
			top.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
			
		divSeccion.appendChild(comentar);
		divSeccion.appendChild(reaccion);
		divSeccion.appendChild(favoritos);
		divSeccion.appendChild(top);
		
		var anterior=document.getElementById("pubAnt");
		var salto=document.createElement("br");
		var divPublicacion=document.createElement("div");
		divPublicacion.setAttribute("id","pubAnt");
		
		divPublicacion.appendChild(salto);
		divPublicacion.appendChild(imagen);
		divPublicacion.appendChild(nombre);
		divPublicacion.appendChild(parrafo);
		divPublicacion.appendChild(document.createElement("br"));
		divPublicacion.appendChild(divSeccion);
		divPublicacion.appendChild(salto);
		divPublicacion.appendChild(salto);
		
		espacio.insertBefore(divPublicacion, anterior);
		publicacion.value="";
	}
}

function publicarUbicacion(){
	var mandar="480";
	this.agrandar(mandar);
	var espacio= document.getElementById("paraPublicar");
		
	var nombreUsuario="El Admin";
	var fotoUsuario="img/x2.jpg";
	
	var imagen=document.createElement("img");
	imagen.setAttribute("src",fotoUsuario);
	imagen.setAttribute("width","50px");
	imagen.setAttribute("style","border-radius: 150px; vertical-align:middle;box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75); display:inline-block");
	
	var nombre=document.createElement("font");
	nombre.setAttribute("style","vertical-align: middle;padding:7px 10px; background-color:rgb(177, 0, 42); font-weight:bold;color:white; border-radius:18px;box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);");
	nombre.appendChild(document.createTextNode(nombreUsuario));
	
	var desc=document.createElement("font");
	desc.setAttribute("style","margin-left:20px; color: rgb(49,49,49);font-style:italic;font-weight:bold;");
	desc.appendChild(document.createTextNode("¡Se encuentra aquí!"));
	
	var parrafo=document.createElement("img");
	parrafo.setAttribute("src","img/miUbicacion.png");
	parrafo.setAttribute("style","width:400px;margin-top:10px;margin-bottom:10px; display:inline-block; box-shadow: 1px 1px 13px 2px rgba(0,0,0,0.75);");
	
	var divSeccion=document.createElement("div");
	divSeccion.setAttribute("style","text-align:center");
	
		var comentar=document.createElement("font");
		comentar.setAttribute("style","font-style:italic; color: rgb(215,79,67); text-align:center; font-weight:bold; vertical-align: middle; margin-right:30px; margin-bottom:40px;")
		comentar. appendChild(document.createTextNode("Comentar..."));
		
		var reaccion=document.createElement("img");
		reaccion.setAttribute("src","img/reaccion.png");
		reaccion.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
		var favoritos=document.createElement("img");
		favoritos.setAttribute("src","img/favoritos.png");
		favoritos.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
		var top=document.createElement("img");
		top.setAttribute("src","img/top.png");
		top.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
	divSeccion.appendChild(parrafo);
	divSeccion.appendChild(document.createElement("br"));
	divSeccion.appendChild(comentar);
	divSeccion.appendChild(reaccion);
	divSeccion.appendChild(favoritos);
	divSeccion.appendChild(top);
	
	var anterior=document.getElementById("pubAnt");
	var salto=document.createElement("br");
	var divPublicacion=document.createElement("div");
	divPublicacion.setAttribute("id","pubAnt");
	
	divPublicacion.appendChild(salto);
	divPublicacion.appendChild(imagen);
	divPublicacion.appendChild(nombre);
	divPublicacion.appendChild(desc);
	divPublicacion.appendChild(divSeccion);
	divPublicacion.appendChild(salto);
	divPublicacion.appendChild(salto);
	
	espacio.insertBefore(divPublicacion, anterior);
	publicacion.value="";
	
	
}
function publicarAlbum(){
	var mandar="330";
	this.agrandar(mandar);
	var espacio= document.getElementById("paraPublicar");
		
	var nombreUsuario="El Admin";
	var fotoUsuario="img/x2.jpg";
	
	var imagen=document.createElement("img");
	imagen.setAttribute("src",fotoUsuario);
	imagen.setAttribute("width","50px");
	imagen.setAttribute("style","border-radius: 150px; vertical-align:middle;box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);");
	
	var nombre=document.createElement("font");
	nombre.setAttribute("style","vertical-align: middle;padding:7px 10px; background-color:rgb(177, 0, 42); font-weight:bold;color:white; border-radius:18px;box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);");
	nombre.appendChild(document.createTextNode(nombreUsuario));
	
	var desc=document.createElement("font");
	desc.setAttribute("style","margin-left:20px; color: rgb(49,49,49);font-style:italic;font-weight:bold;");
	desc.appendChild(document.createTextNode("¡Publicó un nuevo álbum!"));
	
	var parrafo=document.createElement("img");
	parrafo.setAttribute("src","img/album.png");
	parrafo.setAttribute("style","width:400px; margin-top:10px;margin-bottom:10px; margin-top:10px; display:inline-block;");
	
	var divSeccion=document.createElement("div");
	divSeccion.setAttribute("style","text-align:center");
	
		var comentar=document.createElement("font");
		comentar.setAttribute("style","font-style:italic; color: rgb(215,79,67); text-align:center; font-weight:bold; vertical-align: middle; margin-right:30px; margin-bottom:40px;")
		comentar. appendChild(document.createTextNode("Comentar..."));
		
		var reaccion=document.createElement("img");
		reaccion.setAttribute("src","img/reaccion.png");
		reaccion.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
		var favoritos=document.createElement("img");
		favoritos.setAttribute("src","img/favoritos.png");
		favoritos.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
		var top=document.createElement("img");
		top.setAttribute("src","img/top.png");
		top.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
	divSeccion.appendChild(parrafo);
	divSeccion.appendChild(document.createElement("br"));
	divSeccion.appendChild(comentar);
	divSeccion.appendChild(reaccion);
	divSeccion.appendChild(favoritos);
	divSeccion.appendChild(top);
	
	var anterior=document.getElementById("pubAnt");
	var salto=document.createElement("br");
	var divPublicacion=document.createElement("div");
	divPublicacion.setAttribute("id","pubAnt");
	
	divPublicacion.appendChild(salto);
	divPublicacion.appendChild(imagen);
	divPublicacion.appendChild(nombre);
	divPublicacion.appendChild(desc);
	divPublicacion.appendChild(divSeccion);
	divPublicacion.appendChild(salto);
	divPublicacion.appendChild(salto);
	
	espacio.insertBefore(divPublicacion,anterior);
	
	publicacion.value="";
	
}
function publicarFoto(){
	var mandar="330";
	this.agrandar(mandar);
	var espacio= document.getElementById("paraPublicar");
		
	var nombreUsuario="El Admin";
	var fotoUsuario="img/x2.jpg";
	
	var imagen=document.createElement("img");
	imagen.setAttribute("src",fotoUsuario);
	imagen.setAttribute("width","50px");
	imagen.setAttribute("style","border-radius: 150px; vertical-align:middle;box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);");
	
	var nombre=document.createElement("font");
	nombre.setAttribute("style","vertical-align: middle;padding:7px 10px; background-color:rgb(177, 0, 42); font-weight:bold;color:white; border-radius:18px;box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);");
	nombre.appendChild(document.createTextNode(nombreUsuario));
	
	var desc=document.createElement("font");
	desc.setAttribute("style","margin-left:20px; color: rgb(49,49,49);font-style:italic;font-weight:bold;");
	desc.appendChild(document.createTextNode("¡Publicó una fotografía!"));
	
	var parrafo=document.createElement("img");
	parrafo.setAttribute("src","img/foto.jpg");
	parrafo.setAttribute("style","width:400px; margin-top:10px;margin-bottom:10px; margin-top:10px; display:inline-block; box-shadow: 1px 1px 13px 2px rgba(0,0,0,0.75);");
	
	var divSeccion=document.createElement("div");
	divSeccion.setAttribute("style","text-align:center");
	
		var comentar=document.createElement("font");
		comentar.setAttribute("style","font-style:italic; color: rgb(215,79,67); text-align:center; font-weight:bold; vertical-align: middle; margin-right:30px; margin-bottom:40px;")
		comentar. appendChild(document.createTextNode("Comentar..."));
		
		var reaccion=document.createElement("img");
		reaccion.setAttribute("src","img/reaccion.png");
		reaccion.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
		var favoritos=document.createElement("img");
		favoritos.setAttribute("src","img/favoritos.png");
		favoritos.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
		var top=document.createElement("img");
		top.setAttribute("src","img/top.png");
		top.setAttribute("style","width:25px; vertical-align: middle; margin-left:10px; margin-right:10px;");
		
	divSeccion.appendChild(parrafo);
	divSeccion.appendChild(document.createElement("br"));
	divSeccion.appendChild(comentar);
	divSeccion.appendChild(reaccion);
	divSeccion.appendChild(favoritos);
	divSeccion.appendChild(top);
	
	var anterior=document.getElementById("pubAnt");
	var salto=document.createElement("br");
	var divPublicacion=document.createElement("div");
	divPublicacion.setAttribute("id","pubAnt");
	
	divPublicacion.appendChild(salto);
	divPublicacion.appendChild(imagen);
	divPublicacion.appendChild(nombre);
	divPublicacion.appendChild(desc);
	divPublicacion.appendChild(divSeccion);
	divPublicacion.appendChild(salto);
	divPublicacion.appendChild(salto);
	
	espacio.insertBefore(divPublicacion,anterior);
	
	publicacion.value="";
	
}
function agrandar(alturaAgrandar){
	var menu=document.getElementById("menuNavegacion");
	var nuevaAltura=parseInt(menu.clientHeight)+parseInt(alturaAgrandar);
	var definirAltura=nuevaAltura+"px";
	menu.style.height = definirAltura;

}
var contador=1;
function cambiarModo(){
	var body=document.getElementById("bodyP");
	if(contador==1){
		var img = document.getElementById("cursorSwitch");
		img.setAttribute("src","img/switch2.png");
		body.setAttribute("style","background-color:rgb(41,49,52)");
		contador=0;
	} else {
		var img = document.getElementById("cursorSwitch");
		img.setAttribute("src","img/switch.png");
		body.setAttribute("style","background-color:white");
		contador=1;
	}
}





//Menu lateral desplegable
function openNav() {
    document.getElementById("sideNavigation").style.width = "350px";
    document.getElementById("main").style.marginLeft = "0px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}