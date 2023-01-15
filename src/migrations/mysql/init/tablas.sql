-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 13-11-2022 a las 04:56:33
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `DBCLIENT`
--
CREATE DATABASE IF NOT EXISTS `DBCLIENT` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `DBCLIENT`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cajas_det`
--

DROP TABLE IF EXISTS `cajas_det`;
CREATE TABLE `cajas_det` (
  `id` bigint NOT NULL,
  `id_header` bigint NOT NULL,
  `fecha` datetime NOT NULL,
  `ptovta` int NOT NULL,
  `nrovta` int NOT NULL,
  `nrocliente` int NOT NULL,
  `dni` int NOT NULL,
  `apellidoynombre` varchar(250) NOT NULL,
  `liq_cierto` int NOT NULL,
  `liq_cmx` int NOT NULL,
  `planmax` varchar(50) NOT NULL,
  `importe_total` decimal(10,2) NOT NULL,
  `importe_efectivo` decimal(10,2) NOT NULL,
  `importe_debito` decimal(10,2) NOT NULL,
  `importe_transferencia` decimal(10,2) NOT NULL,
  `importe_otros` decimal(10,2) NOT NULL,
  `date_procesado` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cajas_header`
--

DROP TABLE IF EXISTS `cajas_header`;
CREATE TABLE `cajas_header` (
  `id` bigint NOT NULL,
  `date_apertura` datetime NOT NULL,
  `date_cierre` datetime  NULL,
  `id_user` bigint NOT NULL,
  `id_sucursal` int NOT NULL,
  `efectivo` decimal(10,2) NOT NULL,
  `debito` decimal(10,2) NOT NULL,
  `transferencia` decimal(10,2) NOT NULL,
  `date_ultimo_mov` datetime NULL,
  `estado` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
CREATE TABLE `sucursales` (
  `id` bigint NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `nsuc` int NOT NULL,
  `estado` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `user` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `date_login` datetime NOT NULL,
  `date_bloqueado` datetime NOT NULL,
  `id_sucursal` bigint NOT NULL,
  `estado` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cajas_det`
--
ALTER TABLE `cajas_det`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cajas_header`
--
ALTER TABLE `cajas_header`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cajas_det`
--
ALTER TABLE `cajas_det`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cajas_header`
--
ALTER TABLE `cajas_header`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
