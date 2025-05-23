-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2025 at 02:57 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vite_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `pf_main_service`
--

CREATE TABLE `pf_main_service` (
  `mainservice_aid` int(11) NOT NULL,
  `mainservice_is_active` tinyint(1) NOT NULL,
  `mainservice_title` varchar(50) NOT NULL,
  `mainservice_category` varchar(50) NOT NULL,
  `mainservice_description` text NOT NULL,
  `mainservice_created` datetime NOT NULL,
  `mainservice_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pf_main_service`
--
ALTER TABLE `pf_main_service`
  ADD PRIMARY KEY (`mainservice_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pf_main_service`
--
ALTER TABLE `pf_main_service`
  MODIFY `mainservice_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
