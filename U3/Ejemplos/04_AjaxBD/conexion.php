<?php
	$servidor="localhost";
	$usuario="root";
	$contrasena="";
	$bd="ejemplo03";
	$conexion;
	
	function conectar($servidor,$usuario,$contrasena,$bd){
		$conexion=mysqli_connect($servidor,$usuario,$contrasena,$bd);
	
		if(!$conexion){
			die('Ocurrió un error al hacer la conexión con la bd');
		} else {
			echo "Conexión a la BD realizada exitosamente<br>";
		}
		return $conexion;
	}
	
	function desconectar($conexion){
		mysqli_close($conexion);
	}
	
	
?>