<?php
    require('abre_sesion.php');
?>
<!Doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Roux Academy: Venue/travel</title>
	<link rel="icon" href="images/icono.png" type="image/png">
	<link rel="stylesheet" type"text/css" href="css/styles.css">
	
</head>
<body  oncontextmenu="return false" onkeydown="return false">
	<div class="contenido">
		<?php require("header.php"); ?>
		
		<div class="principal">
			<main>
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
				<section>
					<br><br>
					<div class="venue"><!--inicio div -->
						<br>
						<img src="images/hotel_phillips.jpg">
						<h3>Phillips of Bell town</h3>
						<p>
							<br>Situated amongt the hip, youthful culture of Downtown 
							Seattle, Phillips of Belltown is the place to be any time of
							 the day or night. Choose from Jazz and Rock music at the 
							various music venues, and shop until you drop at an 
							assortment of thrift stores and upscale boutiques. The hotel 
							itself is a historical gem, with architectural achievements 
							in every beam, brick, and support.
						</p>
						<br>
						<p id="enlace"><a href="#">Get Directions >></a></p>
					</div>
					<!-- fin div -->
					<div class="venue"><!--inicio div -->
						<br>
						<img src="images/hotel_gwendoline.jpg">
						<h3>The Otter Renaissance Hotel</h3>
						<p>
							<br>Hotel founder, Henry Chasings, had a love of otters, having 
							been raised in an Alaskan village where otters played out his
							 back door. As his tribute to the sea creatures of his early 
							days, Henry was insistent upon having an otter in every hall,
							 wall, and room inside the Otter Renaissance Hotel.
						</p>
						<p id="enlace"><a href="#">Get Directions >></a></p>
					</div>
					<!-- fin div -->
					<div class="venue"><!--inicio div -->
						<br>
						<img src="images/hotel_rage.jpg">
						<h3>The Rage Hotel</h3>
						<p>
							<br>Seattle’s South Lake Union district plays home to the ultra 
							modern Rage Hotel, that is outfitted with a state-of-the-art 
							computer and printing facility in the penthouse, and draws 
							tech professionals from all over the world for business 
							conferences and vacations, alike.
						</p>
						<p id="enlace"><a href="#">Get Directions >></a></p>
					</div>
					<!-- fin div -->
					<div class="venue"><!--inicio div -->
						<br>
						<img src="images/hotel_gwendoline.jpg">
						<h3>Gwendoline’s Fancy</h3>
						<p>
							<br>In the heart of the West Edge district in Seattle, 
							Gwendoline’s Fancy, named after a Navy submarine that got 
							lost at sea in 1910, is a central landing place for history 
							buffs who can immerse themselves in the Museum of History 
							located in the hotel mezzanine. For those travelers who 
							aren’t into history, there are plenty of other nearby sights
							 to keep them entertained, including Pike Place Market and 
							the Seattle Art Museum.
						</p>
						<p id="enlace"><a href="#">Get Directions >></a></p>
					</div>
					<!-- fin div -->
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
				
			</aside>
		</div><!-- fin div principal -->
		
		<?php require("footer.php"); ?>
	</div><!-- fin div contenido -->
</body>
</head>
<!-- ojasso.me/roux_academy/-->