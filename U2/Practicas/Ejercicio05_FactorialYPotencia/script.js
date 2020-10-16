//----------------------------------------------- Para la potencia -----------------------------------------------

function potencia(){
	this.limpiar();
	var divMostrar = document.getElementById("divMostrar");
	divMostrar.setAttribute("class","divMostrar");
	
	var divContenido = document.createElement("div");
	
	var titulo= document.createElement("h2");
	titulo.setAttribute("style","color: blue; margin-bottom:30px");
	titulo.appendChild(document.createTextNode("Calcular potencia de un número"));
	
	var inputNumero = document.createElement("input");
	inputNumero.setAttribute("type","number");
	inputNumero.setAttribute("placeholder","Número");
	inputNumero.setAttribute("id","numero");
	
	var inputPotencia = document.createElement("input");
	inputPotencia.setAttribute("type","number");
	inputPotencia.setAttribute("placeholder","Potencia");
	inputPotencia.setAttribute("id","potencia");
	
	var botonCalcular = document.createElement("button");
	botonCalcular.appendChild(document.createTextNode("Calcular"));
	botonCalcular.setAttribute("onclick","calcularPotencia()");
	
	var botonLimpiar = document.createElement("button");
	botonLimpiar.appendChild(document.createTextNode("Limpiar"));
	botonLimpiar.setAttribute("onclick","limpiarResultado()");
	
	var salto=document.createElement("br");
	var mostrarResultado = document.createElement("p");
	mostrarResultado.setAttribute("id","resultado");
	
	divContenido.appendChild(titulo);
	divContenido.appendChild(inputNumero);
	divContenido.appendChild(inputPotencia);
	divContenido.appendChild(salto);
	divContenido.appendChild(botonCalcular);
	divContenido.appendChild(botonLimpiar);
	divContenido.appendChild(mostrarResultado);
	
	divMostrar.appendChild(divContenido);
	
}

function calcularPotencia(){
	this.limpiarResultado();
	
	var numero = document.getElementById("numero").value;
	var potencia = document.getElementById("potencia").value;
	var mostrarResultado = document.getElementById("resultado");
	
	const resultado = function (a,b){
								return Math.pow(a,b);
							};

	var texto = document.createElement("b");
	texto.appendChild(document.createTextNode("Resultado: "));
	
	mostrarResultado.appendChild(texto);
	mostrarResultado.appendChild(document.createTextNode(""+resultado(numero,potencia)));
}

//----------------------------------------------- Para el factorial -----------------------------------------------

function factorial(){
	this.limpiar();
	var divMostrar = document.getElementById("divMostrar");
	divMostrar.setAttribute("class","divMostrar");
	
	var divContenido = document.createElement("div");
	
	var titulo= document.createElement("h2");
	titulo.setAttribute("style","color: #1883ba; margin-bottom:30px");
	titulo.appendChild(document.createTextNode("Calcular factorial de un número"));
	
	var inputNumero = document.createElement("input");
	inputNumero.setAttribute("type","number");
	inputNumero.setAttribute("placeholder","Número");
	inputNumero.setAttribute("id","numero");
	
	var botonCalcular = document.createElement("button");
	botonCalcular.appendChild(document.createTextNode("Calcular"));
	botonCalcular.setAttribute("onclick","calcularFactorial()");
	
	var botonLimpiar = document.createElement("button");
	botonLimpiar.appendChild(document.createTextNode("Limpiar"));
	botonLimpiar.setAttribute("onclick","limpiarResultado()");
	
	var salto=document.createElement("br");
	var mostrarResultado = document.createElement("p");
	mostrarResultado.setAttribute("id","resultado");
	
	divContenido.appendChild(titulo);
	divContenido.appendChild(inputNumero);
	divContenido.appendChild(salto);
	divContenido.appendChild(botonCalcular);
	divContenido.appendChild(botonLimpiar);
	divContenido.appendChild(mostrarResultado);
	
	divMostrar.appendChild(divContenido);
}
var i=1;
var numero;
function calcularFactorial(){
	this.limpiarResultado();
	
	numero = parseInt(document.getElementById("numero").value);
	i=1;
	var mostrarResultado = document.getElementById("resultado");
	
	var res=1;
	if(numero<0){
		res="Entrada no valida";
	}
	if(numero>1){
		res=factorialRecursividad(1);
	}
	
	var texto = document.createElement("b");
	texto.appendChild(document.createTextNode("Resultado: "));
	
	mostrarResultado.appendChild(texto);
	mostrarResultado.appendChild(document.createTextNode(res));
}

function factorialRecursividad(res){
	if(i<numero){
		res=res*(i+1);
		i++;
		res=this.factorialRecursividad(res);
	}
	return res;
}


//----------------------------------------------- Otros -----------------------------------------------

function limpiar(){
	var divMostrar = document.getElementById("divMostrar");
	divMostrar.innerHTML="";
}
function limpiarResultado(){
	var mostrarResultado = document.getElementById("resultado");
	var numero=document.getElementById("numero");
	var potencia=document.getElementById("potencia");
	mostrarResultado.innerHTML="";
	
}

