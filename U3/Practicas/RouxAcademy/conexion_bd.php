<?php
	$servidor="localhost";
	$usuario="root";
	$contrasena="";
	$bd="rouxacademy";
	$conexion;
	
	$conexion=mysqli_connect($servidor,$usuario,$contrasena,$bd);


    if(!$conexion){
        die('Conexion a la base de datos' . $bd . ' falló' . mysqli_connect_error());
    }

    function valida_usuario_bd($email, $password, $conexion){
        $query = "select 1 as user_Valido from usuarios where email='$email' and password=MD5('$password')";
        //echo $query . "<br>";
        $resultado = mysqli_query($conexion, $query) or die('Error al ejecutar la consulta');
        if(mysqli_num_rows($resultado)==0){
            return false;
        } else {
            return true;
        }
    }
	if(isset($_POST["register"])){
		$email=$_POST["email"];
		$password=$_POST["password"];
		
		$name=$_POST["name"];
		$company=$_POST["company"];
		$requestRadio=$_POST["requestRadio"];
		$comment=$_POST["comment"];
		$check=$_POST["check"];
		$typeRequest=$_POST["typeRequest"];
		
		$consulta="INSERT INTO `usuarios` (`id_user`, `email`, `password`) VALUES (NULL, '$email', MD5('$password'));";
		
		if(mysqli_query($conexion,$consulta)){
			$consulta = "select id_user from usuarios where email='$email' and password=MD5('$password')";
			$registros = mysqli_query($conexion, $consulta) or die('Error al ejecutar la consulta');

			if($registros->num_rows>0){
				while($fila=$registros->fetch_assoc()){
					$id_usuario=$fila["id_user"];
				}
			} else {
				echo "Error al hacer la consulta a la BD";
			}
			
			$consulta = "INSERT INTO `info_usuarios` (`id_info`,`name`, `company_name`, `request_type`, `comment`, `mailing_list_suscribe`, `hear_about_us`, `id_user`) VALUES (NULL, '$name', '$company', '$requestRadio', '$comment', '$check', '$typeRequest', $id_usuario);";
			//echo "<font color='green'>Registro agregado exitosamente</font><br><br>";
			if(mysqli_query($conexion,$consulta)){
				header('Location: login.php');
				//echo "<font color='green'>Registro agregado exitosamente</font><br><br>";
			} else {
				echo "<br>Ocurrio un fallo al momento de insertar registro";
			}
		}else{
			echo "<br>Ocurrio un fallo al momento de insertar registro";
		}
	}
	
  
?>