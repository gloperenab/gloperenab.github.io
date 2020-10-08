function agregarElementos(){
	let body  = document.getElementById("agregar");
	
	let titulo = document.createElement("h1");
	titulo.innerText = "Himno nacional";
	titulo.setAttribute("class", "tituloE");
	
	let parrafo = document.createElement("p");
	
	let texto = document.createTextNode("Masiosare un extraño enemigo, profana con su planta tus suelos. Pienso patria querida que el cielo, un soldado en cada hijo te dio, un soldado en cada hijo te dio. Mexicanos al grito de guerra. El acero aprestad y el bridón. Y retiemble en sus centros la tierra, al sonoro rugir del cañon. Y retiemble en sus centros la tierra, al sonoro rugir del cañón");

	parrafo.appendChild(texto);
	parrafo.classList.add("parrafoE");
	
	body.appendChild(titulo);
	body.appendChild(parrafo);
	
	
}