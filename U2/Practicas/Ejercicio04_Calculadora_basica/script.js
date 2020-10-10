var operadorC="";
var primerValor="0";
var segundoValor;
var res="";
var desIgual="false";
var operadorPresionado="false";

//---------------------------------------------Botones de numeros---------------------------------------------

function uno(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"1";
	salida.value=primerValor;
}
function dos(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"2";
	salida.value=primerValor;
}
function tres(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"3";
	salida.value=primerValor;
}
function cuatro(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"4";
	salida.value=primerValor;
}
function cinco(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"5";
	salida.value=primerValor;
}
function seis(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"6";
	salida.value=primerValor;
}
function siete(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"7";
	salida.value=primerValor;
}
function ocho(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"8";
	salida.value=primerValor;
}
function nueve(){
	operadorPresionado="false";
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value=="0"){
		salida.value="";
	}
	primerValor=salida.value+"9";
	salida.value=primerValor;
}
function cero(){
	if(desIgual=="true"){
		this.limpiarTodo();
	}
	var salida=document.getElementById("salida");
	if(salida.value!="0"){
		primerValor=salida.value+"0";
	}
	salida.value=primerValor;
}

//---------------------------------------------Botones de operadores---------------------------------------------

function suma(){
	if(operadorPresionado!="true"){
		desIgual="false";
		var salida=document.getElementById("salida");
		var salidaPrevia=document.getElementById("salidaPrevia");
		if(res!=""){
			primerValor=res;
		}
		if(primerValor==""){
			primerValor="0";
		}
		if(operadorC!=""){
			this.operadorExistente();
		}
		operadorC="+";
		segundoValor=primerValor;
		salida.value="0";
		salidaPrevia.value=segundoValor+" "+operadorC;
	}
	operadorPresionado="true";
}
function resta(){
	if(operadorPresionado!="true"){
		desIgual="false";
		var salida=document.getElementById("salida");
		var salidaPrevia=document.getElementById("salidaPrevia");
		if(res!=""){
			primerValor=res;
		}
		if(primerValor==""){
			primerValor="0";
		}
		if(operadorC!=""){
			this.operadorExistente();
		}
		operadorC="-";
		segundoValor=primerValor;
		salida.value="0";
		salidaPrevia.value=segundoValor+" "+operadorC;
	}
	operadorPresionado="true";
	
}
function multiplicacion(){
	if(operadorPresionado!="true"){
		desIgual="false";
		var salida=document.getElementById("salida");
		var salidaPrevia=document.getElementById("salidaPrevia");
		if(res!=""){
			primerValor=res;
		}
		if(primerValor==""){
			primerValor="0";
		}
		if(operadorC!=""){
			this.operadorExistente();
		}
		operadorC="*";
		segundoValor=primerValor;
		salida.value="0";
		salidaPrevia.value=segundoValor+" "+operadorC;
	}
	operadorPresionado="true";
	
}
function division(){
	if(operadorPresionado!="true"){
		desIgual="false";
		var salida=document.getElementById("salida");
		var salidaPrevia=document.getElementById("salidaPrevia");
		if(res!=""){
			primerValor=res;
		}
		if(primerValor==""){
			primerValor="0";
		}
		if(operadorC!=""){
			this.operadorExistente();
		}
		operadorC="/";
		segundoValor=primerValor;
		salida.value="0";
		salidaPrevia.value=segundoValor+" "+operadorC;
	}
	operadorPresionado="true";
	
}

//---------------------------------------------Botones limpiar todo, igual---------------------------------------------

function limpiarTodo(){
	operadorC="";
	primerValor="0";
	segundoValor="";
	res="";
	desIgual="false";
	operadorPresionado="false";

	var salida=document.getElementById("salida");
	var salidaPrevia=document.getElementById("salidaPrevia");
	
	salida.value="0";
	salidaPrevia.value="";
	primerValor="";
}

function igual(){
	var salida=document.getElementById("salida");
	var salidaPrevia=document.getElementById("salidaPrevia");
	
	primerValor=document.getElementById("salida").value;
	
	if(operadorC=="+"){
		res=(parseFloat(segundoValor)+parseFloat(primerValor));
		
		salida.value=res;
		salidaPrevia.value="";
		operadorC="";
	}
	if(operadorC=="-"){
		res=(parseFloat(segundoValor)-parseFloat(primerValor));
		
		salida.value=res;
		salidaPrevia.value="";
		operadorC="";
	}
	if(operadorC=="*"){
		res=(parseFloat(segundoValor)*parseFloat(primerValor));
		
		salida.value=res;
		salidaPrevia.value="";
		operadorC="";
	}
	if(operadorC=="/"){
		res=(parseFloat(segundoValor)/parseFloat(primerValor));
		
		salida.value=res;
		salidaPrevia.value="";
		operadorC="";
	}
	desIgual="true";
}

//---------------------------------------------Métodos---------------------------------------------
function operadorExistente(){
	
	var salida=document.getElementById("salida");
	var salidaPrevia=document.getElementById("salidaPrevia");
	
	primerValor=document.getElementById("salida").value;
	
	if(operadorC=="+"){
		primerValor=(parseFloat(segundoValor)+parseFloat(primerValor));
	}
	
	if(operadorC=="-"){
		primerValor=(parseFloat(segundoValor)-parseFloat(primerValor));
	}
	
	if(operadorC=="*"){
		primerValor=(parseFloat(segundoValor)*parseFloat(primerValor));
	}
	
	if(operadorC=="/"){
		primerValor=(parseFloat(segundoValor)/parseFloat(primerValor));
	}
}

//---------------------------------------------Extra, funcion con teclado---------------------------------------------

window.addEventListener("keydown", 
	function (event) {
		console.log(event);
		var teclado="";
		if(event.key=="Escape"){
			this.limpiarTodo();
		}
		if(event.key=="1"){
			this.uno();
		}
		if(event.key=="2"){
			this.dos();
		}
		if(event.key=="3"){
			this.tres();
		}
		if(event.key=="4"){
			this.cuatro();
		}
		if(event.key=="5"){
			this.cinco();
		}
		if(event.key=="6"){
			this.seis();
		}
		if(event.key=="7"){
			this.siete();
		}
		if(event.key=="8"){
			this.ocho();
		}
		if(event.key=="9"){
			this.nueve();
		}
		if(event.key=="0"){
			this.cero();
		}
		if(event.key=="+"){
			this.suma();
		}
		if(event.key=="-"){
			this.resta();
		}
		if(event.key=="*"){
			this.multiplicacion();
		}
		if(event.key=="/"){
			this.division();
		}
		if(event.key=="="){
			this.igual();
		}
		
	}
,false);