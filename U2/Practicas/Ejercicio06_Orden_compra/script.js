var contador=1;
var existe=false;
var montoSuma=0;

/* ------------------------------------------ Para agregar articulos ------------------------------------------ */
function agregar(){
	var productoElegido = document.getElementById("productos").value;
	if(productoElegido!="seleccione"){
		var precioProducto = document.getElementById("precio").value;
		var unidadesProducto = document.getElementById("unidades").value;
		
		if(precioProducto!=""&&unidadesProducto!=""){
			var tabla = document.getElementById("tablaMostrar");
		
			var fila = document.createElement("tr");
			fila.setAttribute("id","filaId"+contador);
			
			if(contador%2!=0){
				fila.setAttribute("class","paraTdImpar");
			} else {
				fila.setAttribute("class","paraTdPar");
			}
			
			var columnaId = document.createElement("td");
			columnaId.appendChild(document.createTextNode(contador));
			columnaId.setAttribute("class","id");
			
			var columnaProd= document.createElement("td");
			columnaProd.appendChild(document.createTextNode(productoElegido));
			columnaProd.setAttribute("id","productosTabla"+contador);
			
			var columnaPrecioU = document.createElement("td");
			columnaPrecioU.appendChild(document.createTextNode("$"+precioProducto));
			columnaPrecioU.setAttribute("id","precioUTabla"+contador);
			
			var columnaUnidades = document.createElement("td");
			columnaUnidades.appendChild(document.createTextNode(unidadesProducto));
			columnaUnidades.setAttribute("id","unidadesTabla"+contador);
			
			var columnaMonto = document.createElement("td");
			columnaMonto.appendChild(document.createTextNode("$"+(precioProducto*unidadesProducto)));
			columnaMonto.setAttribute("class","montos");
			
			var botonModificar = document.createElement("button");
			botonModificar.setAttribute("value",contador);
			botonModificar.setAttribute("class","botonModificar");
			botonModificar.addEventListener("click",function(){
				dialogoConfirmarModificar(this.value);
			});
			
			var botonEliminar = document.createElement("button");
			botonEliminar.setAttribute("value",contador);
			botonEliminar.setAttribute("class","botonEliminar");
			botonEliminar.addEventListener("click",function(){
				dialogoConfirmarEliminar(this.value);
			});

			var columnaBotones = document.createElement("td");
			columnaBotones.setAttribute("style","vertical-align: middle;");
			columnaBotones.appendChild(botonModificar);
			columnaBotones.appendChild(botonEliminar);
			
			fila.appendChild(columnaId);
			fila.appendChild(columnaProd);
			fila.appendChild(columnaPrecioU);
			fila.appendChild(columnaUnidades);
			fila.appendChild(columnaMonto);
			fila.appendChild(columnaBotones);
			
			if(contador>1){
				var info=document.getElementById("info");
				tabla.insertBefore(fila,info);
			} else {
				tabla.appendChild(fila);
			}
			
			montoSuma=montoSuma+(precioProducto*unidadesProducto);
			contador++;
			this.infoVenta();
			this.limpiarEntradas();
		}else{
			alert("Favor de llenar todos los campos");
		}	
	} else {
		alert("Debe seleccionar un producto");
	}
}

function kaka(id_eliminar){
	//let id = id_eliminar.id;
	alert(id_eliminar);
}

/* ------------------------------------------ Para eliminar articulos ------------------------------------------ */

var idProductoEliminar;

function borrarDeTabla(){
	var tabla = document.getElementById("tablaMostrar");
	tabla.removeChild(document.getElementById("filaId"+idProductoEliminar));
	this.cerrarDialogos();
	if(tabla.getElementsByTagName("tr").length<=4){
		this.limpiar();
	} else {
		this.actualizarDatos();
	}
	this.limpiarEntradas();
}

/* ------------------------------------------ Para modificar articulos ------------------------------------------ */

function modificar(){
	var nuevoProducto = document.getElementById("productosModificar").value;
	var nuevoPrecio = document.getElementById("precioModiciar").value;
	var nuevasUnidades = document.getElementById("unidadesModificar").value;
	
	if(nuevoProducto=="seleccione"||nuevoPrecio<=0||nuevasUnidades<=0){
		alert("Llene todos los datos correctamente");
	} else {
		document.getElementById("productosTabla"+idProductoModificar).innerText=nuevoProducto;
		document.getElementById("precioUTabla"+idProductoModificar).innerText="$"+nuevoPrecio;
		document.getElementById("unidadesTabla"+idProductoModificar).innerText=nuevasUnidades;
		
		var i=0;
		var tabla = document.getElementById("tablaMostrar");
		while(i<document.getElementsByClassName("id").length){
			if(idProductoModificar==document.getElementsByClassName("id")[i].innerText){
				tabla.getElementsByClassName("montos")[i].innerText="$"+(nuevoPrecio*nuevasUnidades);
			}
			i++;
		}
		this.actualizarDatos();
		this.cerrarDialogos();
		this.limpiarEntradas();
	}
}

/* ------------------------------------------ Generales (Utilizados por más de un botón/método) ------------------------------------------ */

//Comprobar si el id ingresado está registrado en la tabla

function existeProducto(idProducto){
	var existe=false;
	var i=0;
	while(i<document.getElementsByClassName("id").length){
		//alert("Id: "+idProducto+", comparar con:"+document.getElementsByClassName("id")[i].innerText);
		if(idProducto==document.getElementsByClassName("id")[i].innerText){
			existe=true;
		}
		i++;
	}
	return existe;
}

//Actualizar los montos + el subtotal, iva y total

function actualizarDatos(){
	var tabla = document.getElementById("tablaMostrar");
	var i=0;
	montoSuma=0;
	
	while(i<tabla.getElementsByClassName("montos").length){
		montoSuma=montoSuma+parseFloat(tabla.getElementsByClassName("montos")[i].innerHTML.slice(1));
		i++;
	}
	this.infoVenta();
}

//Actualizar el subtotal, iva y total

function infoVenta(){
	var iva=montoSuma*.16;
	var total=montoSuma+iva;
	
	iva=iva*100;
	iva=Math.round(iva);
	iva=iva/100;
	
	total=total*100;
	total=Math.round(total);
	total=total/100;
	
	if(existe==true){
		var elSubtotal=document.getElementById("subtotal");
		elSubtotal.innerHTML="$"+montoSuma;
		var elIva=document.getElementById("iva");
		elIva.innerHTML="$"+iva;
		var elTotal=document.getElementById("total");
		elTotal.innerHTML="$"+total;
	}else {
		//Subtotal
		var tabla = document.getElementById("tablaMostrar");
		
		var fila1 = document.createElement("tr");
		fila1.setAttribute("class","infoVenta");
		fila1.setAttribute("id","info");
		
		var columnaSubTotal1 = document.createElement("th");
		columnaSubTotal1.setAttribute("colspan","4");
		columnaSubTotal1.appendChild(document.createTextNode("Subtotal"));
		
		var columnaSubTotal2 = document.createElement("th");
		columnaSubTotal2.setAttribute("id","subtotal");
		columnaSubTotal2.appendChild(document.createTextNode("$"+montoSuma));
		
		fila1.appendChild(columnaSubTotal1);
		fila1.appendChild(columnaSubTotal2);
		
		//IVA
		var fila2 = document.createElement("tr");
		fila2.setAttribute("class","infoVenta");
		
		var columnaIVA1 = document.createElement("th");
		columnaIVA1.setAttribute("colspan","4");
		columnaIVA1.appendChild(document.createTextNode("IVA"));
		
		var columnaIVA2 = document.createElement("th");
		columnaIVA2.setAttribute("id","iva");
		columnaIVA2.appendChild(document.createTextNode("$"+iva));
		
		fila2.appendChild(columnaIVA1);
		fila2.appendChild(columnaIVA2);
		
		//Total
		var fila3 = document.createElement("tr");
		fila3.setAttribute("class","infoVenta");
		
		var columnaTotal1 = document.createElement("th");
		columnaTotal1.setAttribute("colspan","4");
		columnaTotal1.appendChild(document.createTextNode("Total"));
		
		var columnaTotal2 = document.createElement("th");
		columnaTotal2.setAttribute("id","total");
		columnaTotal2.appendChild(document.createTextNode("$"+total));
		
		fila3.appendChild(columnaTotal1);
		fila3.appendChild(columnaTotal2);
		
		tabla.appendChild(fila1);
		tabla.appendChild(fila2);
		tabla.appendChild(fila3);
		existe=true;
		
	}
}

//Limpiar tabla (Borrar todos los artículos)

function limpiar(){
	contador=1;
	existe=false;
	montoSuma=0;
	idProductoEliminar="";
	idProductoModificar="";
	
	var tabla = document.getElementById("tablaMostrar");
	
	var i=1;
	while(i<tabla.getElementsByTagName("tr").length){
		tabla.removeChild(tabla.getElementsByTagName("tr")[i]);
	}
}

//Limpiar entradas
function limpiarEntradas(){
	document.getElementById("precio").value="";
	document.getElementById("unidades").value="";
}

/* ------------------------------------------ Para los diálogos ------------------------------------------ */


var dialog2 = document.getElementById("dialogoConfirmacionBorrar");
var dialog3 = document.getElementById("dialogoError");

var dialog5 = document.getElementById("dialogoModificar2");

var buttonOpen = document.getElementById("eliminar");
var idProductoModificar;

//Confirmacion eliminar
function dialogoConfirmarEliminar(recibir) {
	idProductoEliminar=recibir;
	if(idProductoEliminar!=""){
		if(this.existeProducto(idProductoEliminar)==true){
			//Si el id ingresado existe
			document.getElementById("articulo").innerText=idProductoEliminar;
			dialog2.showModal();
			
		} else {
			dialog3.show();
		}
		document.getElementById("productoEliminar").value="";
	}
	
}

//Dialogo para modificar articulo
function dialogoModificar2(){
	document.getElementById("articuloM").innerText=idProductoModificar;
	document.getElementById("precioModiciar").value=document.getElementById("precioUTabla"+idProductoModificar).innerHTML.slice(1);
	document.getElementById("unidadesModificar").value=document.getElementById("unidadesTabla"+idProductoModificar).innerHTML;
	dialog5.show();
}

//Confirmacion modificar
function dialogoConfirmarModificar(recibir) {
	idProductoModificar=recibir;
	if(idProductoModificar!=""){
		if(this.existeProducto(idProductoModificar)==true){
			//Si el id ingresado existe
			this.dialogoModificar2();
		} else {
			dialog3.show();
		}
		document.getElementById("productoModificar").value="";
	}
	
}

//Cerrar dialogos
function cerrarDialogos() {
	dialog2.close();
	dialog3.close();
	dialog5.close();
}