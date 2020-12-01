<?php
	$servidor="localhost";
	$usuario="root";
	$clave="";
	$bd="ejercicio03";
	
	if(isset($_GET["pais"])){
		$idPais=$_GET["pais"];

		$conexion=mysqli_connect($servidor, $usuario, $clave, $bd);
		
		$consulta="SELECT id_estado, nombre from estados where id_pais=$idPais";
			
		$resultado=mysqli_query($conexion, $consulta);

		if($resultado->num_rows>0){
			while($fila=$resultado->fetch_assoc()){
				$datos[]=Array(
					"id_estado"=>$fila["id_estado"],
					"nombre"=>$fila["nombre"]
				);
				
			}
		}
		
		echo json_encode($datos);
	}
	
	if(isset($_GET["estado"])){
		$idEstado=$_GET["estado"];

		$conexion=mysqli_connect($servidor, $usuario, $clave, $bd);
		
		$consulta="SELECT id_municipio, nombre from municipios where id_estado=$idEstado";
			
		$resultado=mysqli_query($conexion, $consulta);

		if($resultado->num_rows>0){
			while($fila=$resultado->fetch_assoc()){
				$datos[]=Array(
					"id_municipio"=>$fila["id_municipio"],
					"nombre"=>$fila["nombre"]
				);
				
			}
		}
		
		echo json_encode($datos);
	}
?>