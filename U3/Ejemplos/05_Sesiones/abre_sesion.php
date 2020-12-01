<?php
    session_start();
    if(!isset($_SESSION['usuario'])){
        header('Location: login.php'); #Redirigir a login.php
        exit;
    }

?>