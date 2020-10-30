<?php

    require 'conexion.php';
    session_start();

    $registrarNombre = $_POST['registrarNombre'];
    $registrarEmail = $_POST['registrarEmail'];
    $registrarContrasenia = $_POST['registrarContrasenia'];
    $registrarContraseniaConfirmar = $_POST['registrarContraseniaConfirmar'];




    $q = "INSERT INTO usuarios(clave,nombre,correo) VALUES('$registrarContrasenia','$registrarNombre','$registrarEmail');";

   
    if($registrarContrasenia == $registrarContraseniaConfirmar){
        mysqli_query($conexion,$q);

        echo'<script type="text/javascript">alert("Usuario registrado correctamente");location.href="login.html";</script>';
    }else{
        echo'<script type="text/javascript">alert("Revisar la contraseña");location.href="register.html";</script>';

    }

?>