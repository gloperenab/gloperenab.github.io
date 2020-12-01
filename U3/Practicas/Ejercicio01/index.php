<?php
	$numeroTabla=3;
	$resultados=5;
?>

<!Doctype html>
<html>
<head>
	<meta charset="utf-8">
	 <title>Tabla con PHP</title>
	<script type="text/javascript" src="script.js"></script>
	<link rel="stylesheet" type"text/css" href="css/styles.css">
</head>
<body  oncontextmenu="return false">
	<div class="principal">
		<nav>
			<div class="cabecera">
				<img src="Imagenes/php.jpg">
				<div>
					<h3>Unidad 3: Ejercicio 01 | Tabla con PHP</h3><br>
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
					<td><a href="#">Inicio</a></td>
					<td><a href="..\..\..\index.html">Regresar a página principal</a></td>
				</tr>
			</table>
			</center>
		</nav><!-- fin -->
		
		<div class="contenido">
			<main>
			
				<section>
				
					<h2> Tabla en PHP</h2>
					<table border="1px solid">
						<tr style="background-color:rgb(119,255,255)">
							<th>Número</th>
							<th>Multiplicador</th>
							<th>Resultado</th>
						</tr>
						<?php for($i=0;$i<$resultados;$i++){?>
							<tr>
								<td><?php echo $numeroTabla?></td>
								<td><?php echo ($i+1)?></td>
								<td><?php echo ($numeroTabla*($i+1))?></td>
							</tr>
						<?php
						}
						?>
					</table>
					
				</section>
				
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