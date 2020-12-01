<?php
	$servidor="localhost";
	$usuario="root";
	$clave="";
	$bd="ejemplo03";
	$id=$_GET["id"];
	$conexion=mysqli_connect($servidor, $usuario, $clave, $bd);
	
	$consulta="SELECT id, nombre, edad, direccion from personas";
		
	$resultado=mysqli_query($conexion, $consulta);
	
	//$array=mysqli_fetch_array($resultado);

	if($resultado->num_rows>0){
		while($fila=$resultado->fetch_assoc()){
			$datos[]=Array(
				"id"=>$fila["id"],
				"nombre"=>$fila["nombre"],
				"edad"=>$fila["edad"],
				"direccion"=>$fila["direccion"]
			);
			
		}
	}
	
	echo json_encode($datos);
	
?>