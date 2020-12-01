<?php
    require('abre_sesion.php');
?>
<!Doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Roux Academy</title>
	<link rel="icon" href="images/icono.png" type="image/png">
	<link rel="stylesheet" type"text/css" href="css/styles.css">
	
</head>
<body>
	<div class="contenido">
		<?php require("header.php"); ?>
		
		<div class="principal">
			<main>
				<section>
					<h2>About the event</h2>
					<p>
						The Roux Academy’s annual conference and exhibit is designed 
						to foster a close-knit relationship amongst artists at various 
						universities around the world. But sign up early, as this 
						not-to-miss conference sells out quickly, and the waiting list is long.
						In addition, art students are encouraged to send in works from their 
						school portfolios to be considered for hanging in the CAC exhibit halls, 
						as well as to be selected as a Featured Artist.
					</p>
				</section>
				<section>
					<h2>Featured Artists</h2>
					<p>
						The Roux Academy selects approximately 200 distinct pieces of 
						contemporary art for display in their collective exhibit. Nine individuals 
						are granted his or her own exhibit hall to display entire collections or 
						themed pieces. Each Featured Artist has an opportunity to speak at the 
						conference to share his or her vision, perspective, and techniques with
						conference attendees.
					</p>
					<div class="fotosArtistas">
						<?php require("img_artistas.php");?>
					</div><!-- fin fotos artistas -->
					
					
				</section>
				<section>
					<h2>The Venue</h2>
					<h3>Hotel contempo</h3>
					<div class="hotel">
						<img src="images/hotel_contempo.jpg">
						<p>
							CAC speaking events and gallery exhibits take place inside Hotel Contempo,
							at 309 1st Avenue, in Downtown Seattle. Just a walk to the Space Needle, 
							and a sampling of restaurants and shopping makes the venue a much 
							sought-after location for conferences, year after year.
							Hotel Contempo is the perfect spot for a gathering of modern artists. Not only 
							are the conference rooms and halls decked with breathtaking contemporary 
							art and sculptures, but the individual rooms are as unique as the renowned 
							artists who were commissioned to decorate them. From the Ross Monroe 
							Purple suite filled wall to wall with paintings to the Tess Lessinger Sculpted 
							Universe suite, with dozens of original sculptures, visitors are sure to be
							intrigued and comforted during their stay at Hotel Contempo.
						</p>
					</div>
				</section>
			</main>
			<aside>
				<section>
					<h1>Coming to the event</h1>
					<h3>Check out our mobile site</h3>
					<p>
						Our mobile site contains schedules, and exhibit/ artist details, accessible simply 
						by scanning QR codes located all around the venue exhibit halls.
					</p>
					<img src="images/iphone.png">
					<p style="text-align: right"><a href="index.html">Roux mobile >></a></p>
				</section>
				<section>
					<h2>Schedule</h2>
					<h3>Monday</h3>
					<p>
						The first day of CAC events is kicked off under the theme of Art in Full Color.
						From a demonstration in graffiti art on a wall of the Rousseau Room, to the 
						exhibit of colorful glazed modern glassware in the Dover Hall.
					</p>
					<h3>Thuesday</h3>
					<p>
						Water in Art is the theme for the second day, as art students gather at the 
						Fountain of Intrigue to create ice sculptures, and art lecturers discuss the 
						use of water as an art material, and water as an art subject.
					</p>
					<p style="text-align: right"><a href="schedule.html">Full Schedule >></a></p>
				</section>
			</aside>
		</div><!-- fin div principal -->
		
		<?php require("footer.php"); ?>
	</div><!-- fin div contenido -->
</body>
</head>
<!-- ojasso.me/roux_academy/-->