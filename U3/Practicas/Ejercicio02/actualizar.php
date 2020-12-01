<!Doctype html>
<html>
<head>
	<meta charset="utf-8">
	 <title>Registro libros con PHP</title>
	<link rel="stylesheet" type"text/css" href="css/styles.css">
	
</head>
<body>
	<div class="principal">
		<nav>
			<div class="cabecera">
				<img src="Imagenes/php.jpg">
				<div>
					<h3>Unidad 3: Ejercicio 02 | Registro libros con PHP y BD</h3><br>
					<p>
						Alumno: Gerardo Loperena Bustillos<br>
						Carrera: Ingeniería en Tecnologías de la Información<br>
						E-Mail: 1830472@upv.edu.mx
					</p>
				</div>
				
			</div>
			<center>
			<table>
				<tr>
					<td><a href="index.php">Inicio</a></td>
					<td><a href="..\..\..\index.html">Regresar a página principal</a></td>
				</tr>
			</table>
			</center>
		</nav><!-- fin -->
		
		<div class="contenido">
		
			<main>
				<h1>LISTA DE LIBROS</h1>
				<h2 class="color">Actualizar</h2>
				<?php
				if (isset($_GET['id'])){
					require ('conexion.php');
					$conexion=conectar($servidor,$usuario,$contrasena,$bd);
					$q = "SELECT id, titulo, autor, precio, editorial, enlace from libros where id=".$_GET['id'].";";
					
					$consulta = mysqli_query($conexion,$q);
					$array = mysqli_fetch_array($consulta);
					

				} else {
					echo "<h3 style='color:red'>No fue posible encontrar el registro solicitado</h3>";
				}
				?>
				<div  style="display:flex;">
				
					<div style="width:8%">
						<label class="etiquetas" for="titulo">Id:</label><br><br>
						<label class="etiquetas" for="titulo">Titulo:</label><br><br>
						<label class="etiquetas" for="autor">Autor:</label><br><br>
						<label class="etiquetas" for="editorial">Editorial:</label><br><br>
						<label class="etiquetas" for="precio">Precio:</label><br><br>
					</div>
					
					
					
					<div>
						<form action="index.php" method="POST">
							<?php 
							
							?>
							<input class="controles" type="text" name="id" value="<?php echo $array["id"]?>" readonly><br><br>
							<input class="controles" type="text" name="titulo" requiered value="<?php echo $array["titulo"]?>"><br><br>
							<input class="controles" type="text" name="autor" requiered value="<?php echo $array["autor"]?>"><br><br>
							<input class="controles" type="text" name="editorial" requiered value="<?php echo $array["editorial"]?>"><br><br>
							<input class="controles" type="number" step="0.01" name="precio" requiered value="<?php echo $array["precio"]?>"><br><br><br><br>
							
							<input type="submit" value="Actualizar" name="actualizar" class="registrar">
						</form>
					</div>
				</div>
			</main>
			<aside>
				
			</aside>
		</div><!-- fin contenido-->
		
		<footer>
			<center><p>@Todos los derechos reservados</p></center>
		</footer>
	</div>
</body>
</html>