<?php
	$edad=20;
	$nombre="juan perez";
	$trabaja=false;
	$altura = 1.80;
	
	$colores=array('amarillo','rojo','azul');
	
	$alumnos=array(
		"123"=>"juan perez",
		"456"=>"Monita",
		"789"=>"Mario G"
	);
	
	$alumno1=(object)[
		"matricula"=>"1830472",
		"nombre"=>"GERARDO LOPERENA BUSTILLOS",
		"carrera"=>"ITI",
		"colores"=>$colores
	];
	/*
	echo "Nombre: " . $nombre . "<br>";
	echo "Edad: " . $edad . "<br>";
	echo "Trabaja: " . ($trabaja?"SI":"NO") . "<br>";
	echo "Altura: " . $altura . "<br>";
	
	echo "Color: " . $colores[0] . "<br>";
	
	echo "Nombre: " . $alumnos["123"] . "<br>";
	
	echo "<br>";
	print_r($colores);
	echo "<br><br>";
	var_dump($alumnos);
	echo "<br><br>";
	var_dump($alumno1);
	
	echo "<br>------------<br>";
	
	for($i=0;$i<5;$i++){
		echo ($i+1) . " saludo<br>";
	}
	echo "<br><br>";
	$i=0;
	foreach($colores as $color){
		echo "Color $i: $color <br>";
		$i++;
	}
	echo "<br><br>";
	$i=0;
	foreach($alumnos as $matricula=>$nombre){
		echo "Matricula: $matricula - $nombre <br>";
		$i++;
	}
	*/
	
	/*
	for($i=0;$i<5;$i++){
		echo "<h2>Subtitulo " . ($i+1) . "</h2>";
	}
	*/
?>

<!Doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>Titulo nice</h2>
	
	<?php for($i=0;$i<5;$i++){?>
		<h2>Subtitulo <?php echo ($i);?> </h2>
	<?php
	}
	?>
	
	
</body>
</html>