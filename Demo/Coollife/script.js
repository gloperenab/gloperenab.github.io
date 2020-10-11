function iniciar(){
	var correo = document.getElementById("email").value;
	var contrasenia = document.getElementById("password").value;
	if(correo=="admin@coollife.com"&&contrasenia=="admin123"){
		alert("Sesión iniciada");
		window.location="principal.html";
	}
}


function publicar(){
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
		parrafo.setAttribute("style","margin-left:50px; border-bottom:1px solid; padding:2px 10px; margin-top:1px; margin-bottom:40px;");
		parrafo.appendChild(document.createTextNode(publicacion.value));
		
		espacio.appendChild(imagen);
		espacio.appendChild(nombre);
		espacio.appendChild(parrafo);
		publicacion.value="";
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