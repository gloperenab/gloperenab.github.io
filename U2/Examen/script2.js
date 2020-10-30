function calcularTabla(){
	let num1 = document.getElementById("tabla").value;
        let num2 = document.getElementById("resultados").value;
        
        if(num1>=1&&num1<=50){
            if(num2>=1&&num2<=20){
                var body = document.getElementsByTagName("body")[0];
                var divMostrar = document.createElement("div");
                var tabla = document.createElement("table");
                var tblBody = document.createElement("tbody");
    
                for(var i = 0; i<num2; i++){
                    var hilera = document.createElement("tr");
                    
                        for(var j = 0; j<5; j++){
                            var celda = document.createElement("td");
                            if (j==0){
                            let textonumero = document.createTextNode(num1);
                            celda.appendChild(textonumero);
                            hilera.appendChild(celda);
                            }
                            if (j==1){
                                let textonumero = document.createTextNode("X");
                                celda.appendChild(textonumero);
                                hilera.appendChild(celda);
                            }
                            if (j==2){
                                let textonumero = document.createTextNode(i+1);
                                celda.appendChild(textonumero);
                                hilera.appendChild(celda);
                            }
                            if (j==3){
                                let textonumero = document.createTextNode("=");
                                celda.appendChild(textonumero);
                                hilera.appendChild(celda);
                            }
                            if (j==4){
                                let num3 = num1*(i+1);
                                let textonumero = document.createTextNode(num3);
                                celda.appendChild(textonumero);
                                hilera.appendChild(celda);
                            }
                        }
                        hilera.appendChild(celda);
                        tblBody.appendChild(hilera);
                        
                    }  
                    
                
                tabla.appendChild(tblBody);
                body.appendChild(tabla);
                tabla.setAttribute("border", "2");
                
                  
    
            }else{
                document.getElementById("error_resultados").innerHTML = "Error en Resultados";
                
            }
    
        }else{
            document.getElementById("error_tabla").innerHTML = "Error en Tabla";
        }
        divMostrar.appendChild(tabla);
        body.appendChild(divMostrar);
}