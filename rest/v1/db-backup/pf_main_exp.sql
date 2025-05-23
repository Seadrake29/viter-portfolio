-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 04:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `pf_main_exp`
--

CREATE TABLE `pf_main_exp` (
  `mainexprience_aid` int(11) NOT NULL,
  `mainexprience_is_active` tinyint(1) NOT NULL,
  `mainexprience_title` varchar(50) NOT NULL,
  `mainexprience_category` varchar(128) NOT NULL,
  `mainexprience_description` text NOT NULL,
  `mainexprience_created` datetime NOT NULL,
  `mainexprience_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pf_main_exp`
--
ALTER TABLE `pf_main_exp`
  ADD PRIMARY KEY (`mainexprience_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pf_main_exp`
--
ALTER TABLE `pf_main_exp`
  MODIFY `mainexprience_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
