<?php
	$servidor="localhost";
	$usuario="root";
	$contrasena="";
	$bd="ejemplo05";
	$conexion;
	
	$conexion=mysqli_connect($servidor,$usuario,$contrasena,$bd);


    if(!$conexion){
        die('Conexion a la base de datos' . $bd . ' falló' . mysqli_connect_error());
    }

    echo "Conectado a la base de datos $bd <br>";

    function valida_usuario_bd($usuario, $contrasena, $conexion){
        $query = "select 1 as user_Valido from usuarios where usuario='$usuario' and contrasena=MD5('$contrasena')";
		$query2 = "select id from usuarios where usuario='$usuario' and contrasena=MD5('$contrasena')";
        //echo $query . "<br>";
        $resultado = mysqli_query($conexion, $query) or die('Error al ejecutar la consulta');
		$registros=mysqli_query($conexion,$query2);
		if($registros->num_rows>0){
			while($fila=$registros->fetch_assoc()){
				?> <script type="text/javascript">console.log(<?php echo $fila["id"];?>)</script><?php
			}
		} else {
			echo "Error al hacer la consulta a la BD";
		}
        if(mysqli_num_rows($resultado)==0){
            return false;
        } else {
            return true;
        }
		
		


    }
/*
    if(valida_usuario_bd('omar','qwerty123',$conexion)){
        echo "usuario valido";
    } else{
        echo "usuario no valido";
    }
 */   
?>