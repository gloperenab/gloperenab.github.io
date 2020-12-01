<?php
    session_start();
    if(!isset($_SESSION['email'])){
        header('Location: login.php'); #Redirigir a login.php
        exit;
    }

?>