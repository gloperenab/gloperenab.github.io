function ejecutar(){
	const div = document.querySelector(".aquiSi");
	div.innerHTML="<h1>Cálculo del IMC</h1>";
	
	var peso=prompt("Introduce peso (kg): ");
	var altura=prompt("Introduce altura (m): ");
	var imc=peso/((altura)*altura);
	
	document.getElementById("imprimir").innerHTML = "";
	document.getElementById("imprimir").innerHTML = "Su IMC " + imc;

	
	
}