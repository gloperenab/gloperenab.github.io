function calcularIMC(){
	 
   var imcResultado = document.getElementById("imcResultado");
   var valoracion= document.getElementById("valoracion");
   var img=document.getElementById("img");
   
   var peso = document.getElementById("peso").value;
   var altura = document.getElementById("altura").value;
   var val;
   var imc;
   if(peso<=0||altura<=0){
	   alert( '¡No deje espacios vacios en el formulario!' );
   } else {
	    imc = peso/(altura * altura);
		if(imc<=18.5){
			val="Infrapeso";
			img.innerHTML='<img src="Imagenes/inf.png">';
		} else {
			if(imc>18.8&&imc<=24.9){
				val="Peso normal";
				img.innerHTML='<img src="Imagenes/norm.png">';
			} else {
				if(imc>=25&imc<=29.9){
					val="Sobrepeso";
					img.innerHTML='<img src="Imagenes/so.png">';
				} else {
					if(imc>=30&imc<=34.9){
						val="Obesidad";
						img.innerHTML='<img src="Imagenes/ob.png">';
					} else {
						val="Obesidad Morbida";
						img.innerHTML='<img src="Imagenes/obM.png">';
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
   
    
}
function limpiar(){
	var imcResultado = document.getElementById("imcResultado");
    var valoracion= document.getElementById("valoracion");
    var img=document.getElementById("img");
	
	var peso = document.getElementById("peso");
	var altura = document.getElementById("altura");
   
	peso.value="";
	altura.value="";
	
	img.innerHTML='';
	imcResultado.innerHTML = "";
	valoracion.innerHTML= "";
	
}