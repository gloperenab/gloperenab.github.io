<?php
    require 'conexion_bd.php';
    $valido = false;
    if(isset($_POST['login'])){
        $email=$_POST['email'];
        $password=$_POST['password'];

        if(!valida_usuario_bd($email, $password, $conexion)){
            echo 'No es valido <br>';
            $valido = false;
        } else{
            echo 'Si es valido <br>';
            session_start();
            $valido = true;
            $_SESSION['email']=$email;
            header('Location:index.php');
        }
    }

?>
<!Doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Roux Academy: Log in</title>
	<link rel="icon" href="images/icono.png" type="image/png">
	<link rel="stylesheet" type"text/css" href="css/styles.css">
	
</head>
<body  oncontextmenu="return false" >
	<div class="contenido">
		<header>
			<img src="images/ralogo_monogram.png">
			<p>
				Roux Academy<br>
				Art * Media * Design
			</p>
			<div class="cabecera">
				<h1>Roux Academy 2016 Art Conference</h1>
				<p>
					Join over 500 hundred of the most creative and brilliant minds of 
					art colleges all around the world for five days of lectures by 
					world-renowned art scholars and artists, and seven days and 
					nights of gallery exhibits featuring the best in contemporary art,
					including painting, sculpture, and more, in the beautiful halls of Hotel 
					Contempo in the heart of Seattle.
				</p>
			</div>
		</header>
		<nav>
			<ul>
				<li><a href="index.php">home</a></li>
				<li><a href="artists.php">artists</a></li>
				<li><a href="schedule.php">schedule</a></li>
				<li><a href="venue.php">venue/travel</a></li>
				<li><a href="login.php">log in</a></li>
				<li><a href="register.php">register</a></li>
			</ul>
		</nav>
		<img src="images/art01.jpg" style="margin-bottom:-5px; width:100%;height:300px">
		
		<div class="principal">
			<main>
				<section>
					<h2>Login</h2>
					<p>
						To attend the Roux Academy 2016 Contemporary Art
						Conference, please complete the information below.
					</p>
					<form action="#" method="POST">
						<div>
							<label>Email: *</label>
							<input type="email" name="email" required style="width:250px">
						</div>
						<div>
							<label>Password: *</label>
							<input type="password" name="password" placeholder="Password" required style="width:250px">
						</div>
						<input type="submit" name="login" value="Log in" class="alinear">
					</form>
				</section>
			</main>
			<aside>
				<section>
					<h2>Featured Artists</h2>
					<p>
						Each year, nine individuals are honored as Featured Artists 
						- each being granted his or her own exhibit hall to display 
						entire collections or themed pieces. Each Featured Artist 
						has an opportunity to speak at the conference to share his 
						or her vision, perspective, and techniques with conference 
						attendees.
					</p>
					<div class="art">
						<?php require("img_artistas.php");?>
					</div>
				</section>
			</aside>
		</div><!-- fin div principal -->
		
		<?php require("footer.php"); ?>
	</div><!-- fin div contenido -->
</body>
</head>
<!-- ojasso.me/roux_academy/-->