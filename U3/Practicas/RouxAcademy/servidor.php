<?php
	require 'conexion_bd.php';
	
	$consulta="SELECT nombre, descripcion, imagen from artistas";
		
	$resultado=mysqli_query($conexion, $consulta);

	if($resultado->num_rows>0){
		while($fila=$resultado->fetch_assoc()){
			$datos[]=Array(
				"nombre"=>$fila["nombre"],
				"descripcion"=>$fila["descripcion"],
				"imagen"=>$fila["imagen"]
			);
			
		}
	}
	
	echo json_encode($datos);
	
	
	
?>