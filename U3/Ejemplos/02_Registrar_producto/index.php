<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.css">
<head>
<body>
	<main>
		<h1>LISTA DE LIBROS</h1>
		
		<a href="registrar.php">Nuevo</a>
		<table>
			<th>
				<tr>
					<th>Titulo</th>
					<th>Autor</th>
					<th>Precio</th>
					<th>Editorial</th>
					<th>Enlace</th>
				</tr>
			</th>
			<tbody>
				<?php
					if(isset($_GET["titulo"])){
						$titulo=$_GET["titulo"];
						$autor=$_GET["autor"];
						$editorial=$_GET["editorial"];
						$precio=$_GET["precio"];
						
						echo "<tr>";
							echo "<td> $titulo </td>";
							echo "<td> $autor </td>";
							echo "<td> $editorial </td>";
							echo "<td> $precio </td>";
							echo "<td></td>";
					}
				?>
			</tbody>
			
		</table>
	</main>
</body>
</html>