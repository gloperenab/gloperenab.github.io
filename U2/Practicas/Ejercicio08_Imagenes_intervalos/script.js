let inicio;
let i=1;
function imagenes(){
	document.getElementById("imagen").setAttribute("src",("Imagenes/foto"+i+".jpg"));
	if(i==3){
		i=1;
	} else {
		i++;
	}
}

function comenzar(){
	inicio=setInterval(imagenes,3000);
	
}
function detener(){
	window.clearInterval(inicio);
	var tiempo = document.getElementById("contador");
	tiempo.innerHTML="10";
}