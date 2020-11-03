<?php

    require 'conexion.php';
    session_start();

    $correo = $_POST['usuario'];
    $clave = $_POST['clave'];

    $q = "SELECT COUNT(*) as contar FROM usuarios where correo = '$correo' and clave = '$clave';";

    $consulta = mysqli_query($conexion,$q);
    $array = mysqli_fetch_array($consulta);



    
    if($array['contar'] > 0){
        $_SESSION['correo'] = $correo;
        header("location: principal.html");
    }else{
        echo "Datos incorrectos";
        echo $correo;
    
      echo $clave;
    }
?>