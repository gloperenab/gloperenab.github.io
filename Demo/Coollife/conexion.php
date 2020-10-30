<?php

    $host="localhost";
    $usuario="root";
    $clave="password";
    $bd = "desarrolloo";
    $port = 3308; //poner en caso de que marque error en la conexion


    $conexion = mysqli_connect($host,$usuario,$clave,$bd,$port);

    //Solo para revisar si se realiza la conexion
    /*
    if($conexion){
        echo "conectado correctamente";

    }else{
        echo "no se pudo conectar";
    }*/



?>