// referencia los elementos
var dialog = document.getElementsByTagName("dialog")[0];
var buttonOpen = document.getElementsByTagName("button")[1];
var buttonOpen2 = document.getElementsByTagName("button")[2];

// mostramos el dialog invocando a la funcion show()
function showDialog() {
	dialog.show();
	buttonOpen.setAttribute("class", "close");
	buttonOpen2.setAttribute("class", "close");
}
// mostramos el dialog y la ventana invocando a la funcion show()
function showDialog2() {
	dialog.showModal();
	buttonOpen.setAttribute("class", "close");
	buttonOpen2.setAttribute("class", "close");
}

// ocultamos el dialog invocando a la funcion close()
function closeDialog() {
	dialog.close();
	buttonOpen.removeAttribute("class", "close");
	buttonOpen2.removeAttribute("class", "close");
}