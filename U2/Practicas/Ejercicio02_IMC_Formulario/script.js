 function calcularIMC(){
	 
   var imcResultado = document.getElementById("imcResultado");
   var valoracion= document.getElementById("valoracion");
   
   var peso = document.getElementById("peso").value;
   var altura = document.getElementById("altura").value;
   
   var val;
   var imc = peso/(altura * altura);
   
	if(imc<=18.5){
		val="Infrapeso";
	} else {
		if(imc>18.8&&imc<=24.9){
			val="Peso normal";
		} else {
			if(imc>=25&imc<=29.9){
				val="Sobrepeso";
			} else {
				if(imc>=30&imc<=34.9){
					val="Obesidad";
				} else {
					val="Obesidad Morbida";
				}
			}
		}
	}
	imc=imc*100;
	imc=Math.round(imc);
	imc=imc/100;
	 imcResultado.innerHTML = "<h4>IMC</h4>" + imc;
	 valoracion.innerHTML= "<br><h4>Valoración</h4>" + val;
  }