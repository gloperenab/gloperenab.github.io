<?php
	$servidor="localhost";
	$usuario="root";
	$contrasena="";
	$bd="libreria";
	$conexion;
	
	function conectar($servidor,$usuario,$contrasena,$bd){
		$conexion=mysqli_connect($servidor,$usuario,$contrasena,$bd);
	
		if(!$conexion){
			die('Ocurrió un error al hacer la conexión con la bd');
		} else {
		}
		return $conexion;
	}
	
	function desconectar($conexion){
		mysqli_close($conexion);
	}
	
	
?>