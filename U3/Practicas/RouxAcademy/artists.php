<?php
    require('abre_sesion.php');
?>
<!Doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Roux Academy: Artists</title>
	<link rel="icon" href="images/icono.png" type="image/png">
	<link rel="stylesheet" type"text/css" href="css/styles.css">
	
</head>
<body>
<!--<body  oncontextmenu="return false" onkeydown="return false">-->
	<div class="contenido">
		<?php require("header.php"); ?>
		
		<div class="principal">
			<main>
				<section>
					<h2>About the event</h2>
					<p>
						Each Featured Artist has an opportunity to speak at the conference 
						to share his or her vision, perspective, and techniques with conference
						attendees. It is truly an honor to be a CAC Featured Artist and many 
						past students artists who were featured at CAC have gone on to brilliant 
						careers in art.
						<div class="artistas" id="artistas">
							
						<!--
							<h3>Barot Bellingham</h3>
							<p>
								<img src="images/artists/Barot_Bellingham_tn.jpg">
								Barot has just finished his final year at The Royal Academy of Painting 
								and Sculpture, where he excelled in glass etching paintings and 
								portraiture. Hailed as one of the most diverse artists of his
								generation, Barot is equally as skilled with watercolors as he is with 
								oils.
							</p>
							<h3>Jonathan G. Ferrar II</h3>
							<p>
								<img src="images/artists/Jonathan_Ferrar_tn.jpg">
								Labeled as “The Artist to Watch in 2016” by the London Review,
								 Johnathan has already sold one of the highest priced 
								commissions paid to an art student, ever on record. The piece,
								 entitled Gratitude Resort, a work in oil and mixed media, 
								was sold for $750,000.
							</p>
							<h3>Hillary Hewitt Goldwynn-Post</h3>
							<p>
								<img src="images/artists/Hillary_Goldwynn_tn.jpg">
								Hillary is a sophomore art sculpture student at New York 
								University, and has already won all the major international
								 prizes for new sculptors, including the Divinity Circle, 
								the International Sculptor’s Medal, and the Academy of Paris
								 Award. Hillary’s CAC exhibit features paintings that 
								contain only water images including waves, deep sea, and river.
							</p>
							<h3>Hassum Harrod</h3>
							<p>
								<img src="images/artists/Hassum_Harrod_tn.jpg">
								The Art College in New Dehli has sponsored Hassum for his
								 entire undergraduate career at the university, seeing great
								 promise in his contemporary paintings of landscapes - that
								 use equal parts muted and vibrant tones. Hassum will be
								 speaking on “The use and absence of color in modern art”.
							</p>
							<h3>Jennifer_Jerome</h3>
							<p>
								<img src="images/artists/Jennifer_Jerome_tn.jpg">
								A native of New Orleans, much of Jennifer’s work has centered
								 around abstract images that depict flooding and rebuilding, 
								having grown up as a teenager in the post-flood years.
								 Despite the sadness of devastation and lives lost.
							</p>
							<h3>LaVonne L. LaRue</h3>
							<p>
								<img src="images/artists/LaVonne_LaRue_tn.jpg">
								LaVonne’s giant-sized paintings all around Chicago tell the 
								story of love, nature, and conservation - themes that are 
								central to her heart. LaVonne will share her love and skill 
								of graffiti art on Monday’s schedule, as she starts the 
								painting of a 20-foot high wall in the Rousseau Room of Hotel
								 Contempo in front of a standing-room only audience in Art 
								in Unexpected Places.
							</p>
							<h3>Constance Olivia Smith</h3>
							<p>
								<img src="images/artists/Constance_Smith_tn.jpg">
								Constance received the Fullerton-Brighton-Norwell Award for 
								Modern Art for her mixed-media image of a tree of life, with 
								jewel-adorned branches depicting the arms of humanity, and 
								precious gemstone-decorated leaves representing the spouting 
								buds of togetherness.
							</p>
							<h3>Riley Rudolph Rewington</h3>
							<p>
								<img src="images/artists/Riley_Rewington_tn.jpg">
								A first-year student at the Roux Academy of Art, Media, and 
								Design, Riley is already changing the face of modern art at 
								the university. Riley’s exquisite abstract pieces have no 
								intention of ever being understood, but instead beg the 
								viewer to dream, create, pretend, and envision with their 
								mind’s eye. Riley will be speaking on the “Art of Abstract” 
								during Thursday’s schedule.
							</p>
							<h3>Xhou Ta</h3>
							<p>
								<img src="images/artists/Xhou_Ta_tn.jpg">
								A senior at the China International Art University, Xhou has
								 become well-known for his miniature sculptures, often the 
								size of a rice granule, that are displayed by rear projection
								 of microscope images on canvas. Xhou will discuss the art 
								and science behind his incredibly detailed works of art.
							</p>
							-->
						</div>
						<script type="text/javascript" src="script.js"></script>
					</p>
					
				</section>
			</main>
			<aside>
				<section>
					<h2>The art</h2>
					<p>
						This year’s art pieces will inspire thought, conversation, imagination, and even 
						criticism, as modern art often does. From critically-acclaimed works created by our 
						Featured Artists, to a vast assortment of works by talented art students in 
						schools across the world.
					</p>
					<div class="art">
						<img src="images/art/Barot_Bellingham_tn.jpg">
						<img src="images/art/Constance_Smith_tn.jpg">
						<img src="images/art/Hassum_Harrod_tn.jpg"><br>
						<img src="images/art/Hillary_Goldwynn_tn.jpg">
						<img src="images/art/Jennifer_Jerome_tn.jpg">
						<img src="images/art/Jonathan_Ferrar_tn.jpg"><br>
						<img src="images/art/LaVonne_LaRue_tn.jpg">
						<img src="images/art/Riley_Rewington_tn.jpg">
						<img src="images/art/Xhou_Ta_tn.jpg">
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