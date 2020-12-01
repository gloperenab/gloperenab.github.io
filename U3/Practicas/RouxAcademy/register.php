<?php require("conexion_bd.php")?>
<!Doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Roux Academy: Register</title>
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
					<h2>Register</h2>
					<p>
						To attend the Roux Academy 2016 Contemporary Art
						Conference, please complete the information below.
					</p>
					<h3>Personal Info</h3>
					<form action="#" method="POST">
						<div>
							<label>Name: *</label>
							<input type="text" name="name" placeholder="Last, First" required>
						</div>
						<div>
							<label>Company Name</label>
							<input type="text" name="company">
						</div>
						<div>
							<label>Email: *</label>
							<input type="email" name="email" required>
						</div>
						<div>
							<label>Password: *</label>
							<input type="password" name="password" placeholder="Password" required>
						</div>
						<div class="request">
							<label>Request Type</label><br>
							<input type="radio" name="requestRadio" value="Question">
							Question<br>
							<input type="radio" name="requestRadio" value="Comment">
							Comment
						</div>
						<div class="comment">
							<label >Comment:</label>
							<textarea name="comment"></textarea>
							<br><br>
							<input type="checkbox" name="check" value="1" checked>
							Subscribe to our mailing list?
						</div>
							
						<div>
							How did you hear about us?<br>
							<select name="typeRequest" class="alinear" style="margin-top:6px;">
								<option>Choose...</option>
								<option>A friend</option>
								<option>Facebook</option>
								<option>Twitter</option>
							</select>
						</div>
						<input type="submit" name="register" value="Send" class="alinear">
					</form>
				</section>
				<section>
					<br><br><p id="mensaje" style="font-size:16px">.</p>
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