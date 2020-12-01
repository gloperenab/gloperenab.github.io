create database ejercicio03;
use ejercicio03;

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-12-2020 a las 23:20:07
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
-- Base de datos: `ejercicio03`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

DROP TABLE IF EXISTS `estados`;
CREATE TABLE IF NOT EXISTS `estados` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_pais` int(11) NOT NULL,
  PRIMARY KEY (`id_estado`),
  KEY `id_pais` (`id_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id_estado`, `nombre`, `id_pais`) VALUES
(1, 'Tamaulipas', 1),
(2, 'Sinaloa', 1),
(3, 'California', 2),
(4, 'Florida', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

DROP TABLE IF EXISTS `municipios`;
CREATE TABLE IF NOT EXISTS `municipios` (
  `id_municipio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_estado` int(11) NOT NULL,
  PRIMARY KEY (`id_municipio`),
  KEY `id_estado` (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`id_municipio`, `nombre`, `id_estado`) VALUES
(1, 'Victoria', 1),
(2, 'Tampico', 1),
(3, 'Culiacan', 2),
(4, 'Mazatlan', 2),
(5, 'Los Angeles', 3),
(6, 'San Francisco', 3),
(7, 'Miami', 4),
(8, 'Orlando', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

DROP TABLE IF EXISTS `paises`;
CREATE TABLE IF NOT EXISTS `paises` (
  `id_pais` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id_pais`, `nombre`) VALUES
(1, 'Mexico'),
(2, 'Estados Unidos');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estados`
--
ALTER TABLE `estados`
  ADD CONSTRAINT `estados_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`);

--
-- Filtros para la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD CONSTRAINT `municipios_ibfk_1` FOREIGN KEY (`id_estado`) REFERENCES `estados` (`id_estado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
