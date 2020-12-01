<?php
	//include ('conexion.php');
	require ('conexion.php');

	
	$conexion=conectar($servidor,$usuario,$contrasena,$bd);
	
	$consulta="SELECT id, nombre, edad, direccion from personas";
	
	$registros=mysqli_query($conexion,$consulta);
	
	if($registros->num_rows>0){
		while($fila=$registros->fetch_assoc()){
			echo "<h1>Persona</h1>";
			echo "id: " . $fila["id"] . "<br>";
			echo "nombre: " . $fila["nombre"] . "<br>";
			echo "edad: " . $fila["edad"] . "<br>";
			echo "direccion: " . $fila["direccion"] . "<br><br>";
		}
	} else {
		echo "Error al hacer la consulta a la BD";
	}
	$nombre='Rem';
	$consulta="INSERT INTO personas values(null, '$nombre',17,'Mi corazon owo')";
	
	if(mysqli_query($conexion,$consulta)){
		echo "<br>Registro agregado exitosamente";
	}else{
		echo "<br>Ocurrio un fallo al momento de insertar registro";
	}
	
	desconectar($conexion);
?>