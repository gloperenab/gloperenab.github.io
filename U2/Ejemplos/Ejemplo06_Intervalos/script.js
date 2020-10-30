function empezar(){
	setInterval(saludar,1000);
}


function saludar(){
	var contador = document.getElementById("contador");
	if(parseInt(contador.innerText)>0){
		var valor= parseInt(contador.innerText)-1;
		contador.innerText=valor;
	}
	
}

let inicio;
function saludo2(nom,nom2){
	alert("Hola "+nom+nom2);
}

function empezar2(){
	inicio=window.setTimeout(saludo2,3000,"omar","jasso");
	
}
function detener(){
	widows.clearTimeout(inicio);
}