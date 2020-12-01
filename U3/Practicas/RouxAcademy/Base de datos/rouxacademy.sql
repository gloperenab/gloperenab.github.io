-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-11-2020 a las 02:47:30
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rouxacademy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artistas`
--

DROP TABLE IF EXISTS `artistas`;
CREATE TABLE IF NOT EXISTS `artistas` (
  `id_artista` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `imagen` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(600) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_artista`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `artistas`
--

INSERT INTO `artistas` (`id_artista`, `nombre`, `imagen`, `descripcion`) VALUES
(1, 'Barot Bellingham', 'images\\artists\\Barot_Bellingham_tn.jpg', 'Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils.'),
(2, 'Jonathan G Ferrar II', 'images\\artists\\Jonathan_Ferrar_tn.jpg', 'Labeled as \'The Artist to Watch in 2016\' by the London Review, Johnathan has already sold one of the highest priced commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000.'),
(3, 'Hillary Hewitt Goldwynn-Post', 'images\\artists\\Hillary_Goldwynn_tn.jpg', 'Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor\'s Medal, and the Academy of Paris Award. Hillary\'s CAC exhibit features paintings that contain only water images including waves, deep sea, and river.'),
(4, 'Hassum Harrod', 'images\\artists\\Hassum_Harrod_tn.jpg', 'The Art College in New Dehli has sponsored Hassum for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones. Hassum will be speaking on \'The use and absence of color in modern art\'.'),
(5, 'Jennifer_Jerome', 'images\\artists\\Jennifer_Jerome_tn.jpg', 'A native of New Orleans, much of Jennifer\'s work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost.'),
(6, 'LaVonne L. LaRue', 'images\\artists\\LaVonne_LaRue_tn.jpg', 'LaVonne\'s giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday\'s schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places.'),
(7, 'Constance Olivia Smith', 'images\\artists\\Constance_Smith_tn.jpg', 'Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness.'),
(8, 'Riley Rudolph Rewington', 'images\\artists\\Riley_Rewington_tn.jpg', 'A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley\'s exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind\'s eye. Riley will be speaking on the \'Art of Abstract\' during Thursday\'s schedule.'),
(9, 'Xhou Ta', 'images\\artists\\Xhou_Ta_tn.jpg', 'A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_usuarios`
--

DROP TABLE IF EXISTS `info_usuarios`;
CREATE TABLE IF NOT EXISTS `info_usuarios` (
  `id_info` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `company_name` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `request_type` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `comment` varchar(600) COLLATE utf8mb4_spanish_ci NOT NULL,
  `mailing_list_suscribe` int(10) NOT NULL,
  `hear_about_us` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_info`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `info_usuarios`
--

INSERT INTO `info_usuarios` (`id_info`, `name`, `company_name`, `request_type`, `comment`, `mailing_list_suscribe`, `hear_about_us`, `id_user`) VALUES
(1, 'Gerardo Loperena', 'UPV', 'Comment', 'Probando pagina', 1, 'A friend', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `email`, `password`) VALUES
(1, 'gerardoloperena@gmail.com', '6572bdaff799084b973320f43f09b363');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `info_usuarios`
--
ALTER TABLE `info_usuarios`
  ADD CONSTRAINT `info_usuarios_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
