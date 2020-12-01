<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.css">
<head>
<body>
	<main>
		<form action="index.php" method="GET">
			
			<div>
				<label class="etiquetas" for="titulo">Titulo:</label>
				<input class="controles" type="text" name="titulo" requiered>
			</div>
			
			<div>
				<label class="etiquetas" for="autor">Autor:</label>
				<input class="controles" type="text" name="autor" requiered>
			</div>
			
			<div>
				<label class="etiquetas" for="editorial">Editorial:</label>
				<input class="controles" type="text" name="editorial" requiered>
			</div>
			
			<div>
				<label class="etiquetas" for="precio">Precio:</label>
				<input class="controles" type="number" step="0.01" name="precio" requiered>
			</div>
			
			<input type="submit" value="Aceptar">
	</main>
</body>
</html>