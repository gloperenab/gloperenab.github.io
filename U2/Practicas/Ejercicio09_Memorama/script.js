/* ------------------------------ Para el Interval ------------------------------ */
let intervalo;
var siCoinciden=0;
//Metodo del boton
function empezar(){
	document.getElementById("empezar").removeAttribute("disabled");
	this.activarImagenes();
	this.asignarImagenes();
	intervalo=setInterval(cuentaAtras,1000);
	document.getElementById("detener").setAttribute("disabled","true");
}

//Para empezar cuenta atras
function cuentaAtras(){
	var contador = document.getElementById("contador");
	if(parseInt(contador.innerText)>0){
		var valor= parseInt(contador.innerText)-1;
		contador.innerText=valor;
	} else {
		alert("Tiempo agotado. Intente de nuevo.");
		this.detener();
		location.href="index.html";
	}
	
}
var anteriorPos=-1;
var anteriorValor=-1;

//Para detener el interval y reiniciar el juego
function detener(){
	var contenido=document.getElementById("contenido");
	var imagenes=contenido.getElementsByTagName("img");
	window.clearInterval(intervalo);
	var tiempo = document.getElementById("contador");
	tiempo.innerHTML="180";
	var i=0;
	while(i<imagenes.length){
		imagenes[i].setAttribute("src","Imagenes/antes.png");
		imagenes[i].removeAttribute("class","activadas");
		imagenes[i].removeAttributeNS("valuePos","value");
		imagenes[i].removeAttributeNS("valueValor","value");
		i++;
	}
	document.getElementById("detener").removeAttribute("disabled");
	this.anteriorPos=-1;
	this.anteriorValor=-1;
	siCoinciden=0;
	var divImagen=document.getElementById("paraImagen");
	divImagen.innerHTML="";
	document.getElementById("mensaje").innerHTML="";
	siCoinciden=0;
	location.href="index.html";
}

/* ------------------------------ Para el Memorama ------------------------------ */

//Para poder jugar (Comenzar el juego)
function activarImagenes(){
	var contenido=document.getElementById("contenido");
	var imagenes=contenido.getElementsByTagName("img");
	var i=0;
	while(i<imagenes.length){
		imagenes[i].setAttribute("src","Imagenes/0.png");
		imagenes[i].setAttribute("class","activadas");
		i++;
	}
}

//Asignar aleatoriamente las imagenes
function asignarImagenes(){
	var contenido=document.getElementById("contenido");
	var imagenes=contenido.getElementsByTagName("img");
	
	var salir=false;
	var i=1;
	
	while(i<=8){
		
		var repetir=0;
		while(repetir<2){
			salir=false;
			while(salir==false){
				var numRandom=Math.round(this.paraRandom(0,15));
				
				var imagenActual=imagenes[numRandom];
				if(imagenActual.getAttributeNS("valueValor","value")==null){
					
					imagenActual.setAttributeNS("valueValor","value",i);
					imagenActual.setAttributeNS("valuePos","value",numRandom);
					
					imagenActual.addEventListener("click",function (){
						asignar(this.getAttributeNS("valueValor","value"),this.getAttributeNS("valuePos","value"));
					});
					salir=true;
				}
			}
			repetir++;
		}

		i++;
	}
}

let salida;

//Si no coinciden, tapa las imagenes
function noCoinciden(anterior, nuevo){
	alert("No coinciden");
	var contenido=document.getElementById("contenido");
	var imagenes=contenido.getElementsByTagName("img");
	imagenes[anterior].setAttribute("src","Imagenes/0.png");
	imagenes[nuevo].setAttribute("src","Imagenes/0.png");
	
	this.anteriorPos=-1;
	this.anteriorValor=-1;
}

//Si coinciden, las desactiva. Evalua si ya se ganó.
function coinciden(anterior, nuevo){
	alert("Coinciden");
	var contenido=document.getElementById("contenido");
	var imagenes=contenido.getElementsByTagName("img");
	imagenes[nuevo].setAttributeNS("valueValor","value",0);
	imagenes[anterior].setAttributeNS("valueValor","value",0);
	this.anteriorPos=-1;
	this.anteriorValor=-1;
	
	siCoinciden++;
	document.getElementById("aciertos").innerHTML="<b>Aciertos: </b>"+siCoinciden+"<br><br><br>";
	if(siCoinciden==8){
		document.getElementById("mensaje").innerHTML="¡Felicidades, has ganado!";
		window.clearInterval(intervalo);
		var divImagen=document.getElementById("paraImagen");
		var imagenD = document.createElement("img");
		imagenD.setAttribute("src","Imagenes/ganado.png");
		divImagen.appendChild(imagenD);
		var tiempoComp=180-parseInt(document.getElementById("contador").innerHTML);
		document.getElementById("tiempoCompletado").innerHTML="<b>Completado en: </b>"+tiempoComp+" segundos";
		siCoinciden=0;
	}
}

function asignar(valor,pos){
	var elValor=valor;
	var laPos=pos;
	if(elValor!=0){
		var contenido=document.getElementById("contenido");
		var imagenes=contenido.getElementsByTagName("img");

		imagenes[laPos].setAttribute("src",("Imagenes/"+elValor+".png"));
		
		if(anteriorPos==-1||anteriorValor==-1){
			anteriorPos=laPos;
			anteriorValor=elValor;
		} else {
			if(elValor==anteriorValor&&anteriorPos!=laPos){
				salida=window.setTimeout(coinciden,500,anteriorPos, laPos);
			} else {
				if(anteriorPos!=laPos){
					salida=window.setTimeout(noCoinciden,500,anteriorPos, laPos);
				}
				
			}
		}
	}
}

function paraRandom(min, max) {
  return Math.random() * (max - min) + min;
}
