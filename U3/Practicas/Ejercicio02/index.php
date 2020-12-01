<!Doctype html>
<html>
<head>
	<meta charset="utf-8">
	 <title>Registro libros con PHP</title>
	<link rel="stylesheet" type"text/css" href="css/styles.css">
	<script type="text/javascript" src="script.js"></script>
	
</head>
<body  oncontextmenu="return false">
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
			
				<section>
				
					<h1>LISTA DE LIBROS</h1>
	
					<font style="display:block;text-align:right;margin-right:20px"><a href="registrar.php"><img src="Imagenes/nuevo.png">Nuevo</a></font><br>
					<table border="1px solid" width="100%">
						<thead>
							<tr>
								<th>Titulo</th>
								<th>Autor</th>
								<th>Precio</th>
								<th>Editorial</th>
								<th>Enlace</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							<?php
								require ('conexion.php');
								
								$conexion=conectar($servidor,$usuario,$contrasena,$bd);
								
								/* ---- Mandar datos de la pagina registrar a la BD ---- */
								if (isset($_POST['registrar'])){

									$titulo = $_POST['titulo'];
									$autor = $_POST['autor'];
									$editorial = $_POST['editorial'];
									$precio = $_POST['precio'];
							
									//$consulta="INSERT INTO tablalibros values(null, '$titulo','$autor',$precio,'$editorial',null)";
									$consulta="INSERT INTO `libros` (`id`, `titulo`, `editorial`, `autor`, `enlace`, `precio`) VALUES (NULL, '$titulo', '$editorial', '$autor', NULL, $precio);";
									if(mysqli_query($conexion,$consulta)){
										echo "<font color='green'>Registro agregado exitosamente</font><br><br>";
									}else{
										echo "<br>Ocurrio un fallo al momento de insertar registro";
									}
								}
								
								/* ---- Mandar datos de la pagina actualizar a la BD ---- */
								
								
								if (isset($_POST['actualizar'])){
									
									$id = $_POST['id'];
									$titulo = $_POST['titulo'];
									$autor = $_POST['autor'];
									$editorial = $_POST['editorial'];
									$precio = $_POST['precio'];
									
									$consulta="UPDATE `libros` SET `titulo` = '$titulo', `autor` = '$autor', `precio` = $precio, `editorial` = '$editorial' WHERE `libros`.`id` = $id;";
									if(mysqli_query($conexion,$consulta)){
										echo "<font color='green'>Registro actualizado exitosamente</font><br><br>";
									}else{
										echo "<br>Ocurrio un fallo al momento de actualizar el registro";
									}
								}
								
								/* ---- Actualizar tabla ---- */
								$consulta="SELECT id, titulo, autor, precio, editorial, enlace from libros";
								$registros=mysqli_query($conexion,$consulta);

								if($registros->num_rows>0){
									$contador=0;
									while($fila=$registros->fetch_assoc()){
										echo "<tr>";
											echo "<td>" . $fila["titulo"] . "</td>";
											echo "<td>" . $fila["autor"] . "</td>";
											echo "<td>" . $fila["precio"] . "</td>";
											echo "<td>" . $fila["editorial"] . "</td>";
											echo "<td>" . $fila["enlace"] . "</td>";
											$id=$fila["id"];
											echo "<td class='paraBotones'></td>";
											?>
											<!-- Agregar dinamicamente los botones con JS -->
											
											<script type="text/javascript">
												var columna=document.getElementsByClassName("paraBotones");
												var id=columna[<?php echo $contador?>].value;
												
												var botonModificar = document.createElement("button");
												botonModificar.setAttribute("value",<?php echo $id?>);
												botonModificar.setAttribute("class","botonModificar");
														
												botonModificar.addEventListener("click",function(){
													modificar(this.value);
												});
												
												var botonEliminar = document.createElement("button");
												botonEliminar.setAttribute("value",<?php echo $id?>);
												botonEliminar.setAttribute("class","botonEliminar");
														
												botonEliminar.addEventListener("click",function(){
													eliminar(this.value);
												});
												
												columna[<?php echo $contador?>].appendChild(botonModificar);
												columna[<?php echo $contador?>].appendChild(botonEliminar);
											</script>
											<?php
											$contador++;
										echo "</tr>";
									}
								} else {
									echo "Error al hacer la consulta a la BD";
								}

								desconectar($conexion);
							?>
						</tbody>
						
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