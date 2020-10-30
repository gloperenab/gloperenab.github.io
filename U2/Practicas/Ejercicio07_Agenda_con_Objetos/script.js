var cantidad = prompt("Ingrese cantidad de usuarios a registrar en agenda");

var agenda = new Array;

var i=0;

while(i<cantidad){
	let usuario={
		id: i+1,
		nombre: prompt("Ingrese nombre de usuario "+(i+1)+": "),
		telefono: prompt("Ingrese telefono de usuario "+(i+1)+": ")
	}
	agenda[i]=usuario;
	i++;
}

i=0;
while(i<cantidad){
	var divMostrar = document.getElementById("mostrar");

	var divS = document.createElement("div");
	var persona = document.createElement("h2");
	persona.appendChild(document.createTextNode("Usuario "+(i+1)));
	
	var id = document.createElement("p");
	id.appendChild(document.createTextNode("ID: "+agenda[i].id));
	
	var nombre = document.createElement("p");
	nombre.appendChild(document.createTextNode("Nombre: "+agenda[i].nombre));
	
	var telefono = document.createElement("p");
	telefono.appendChild(document.createTextNode("Telefono: " +agenda[i].telefono));
	telefono.setAttribute("style","margin-bottom:60px");
	divS.appendChild(persona);
	divS.appendChild(id);
	divS.appendChild(nombre);
	divS.appendChild(telefono);
	
	divMostrar.appendChild(divS);
	this.agrandar(150);
	i++;
}


function agrandar(alturaAgrandar){
	var menu=document.getElementById("contenido");
	var nuevaAltura=parseInt(menu.clientHeight)+parseInt(alturaAgrandar);
	var definirAltura=nuevaAltura+"px";
	menu.style.height = definirAltura;

}