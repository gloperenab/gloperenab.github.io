create database libreria;
use libreria;
-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-12-2020 a las 23:15:19
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
-- Base de datos: `libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

DROP TABLE IF EXISTS `libros`;
CREATE TABLE IF NOT EXISTS `libros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `editorial` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `autor` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `enlace` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `precio` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `editorial`, `autor`, `enlace`, `precio`) VALUES
(1, 'La chica del tren', 'Editorial Ven', 'Paula Hawkins', '', '350.00'),
(2, 'El cuento numero trece', 'Editorial Planeta', 'Diane Setterfield', NULL, '238.00'),
(3, 'Luna de Pluton', 'Game 4Life', 'Angel David Revilla', NULL, '666.00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
