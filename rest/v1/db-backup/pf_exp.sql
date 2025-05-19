-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2025 at 08:45 AM
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
-- Table structure for table `pf_exp`
--

CREATE TABLE `pf_exp` (
  `experience_aid` int(11) NOT NULL,
  `experience_is_active` tinyint(1) NOT NULL,
  `experience_title` varchar(50) NOT NULL,
  `experience_description` varchar(128) NOT NULL,
  `experience_created` datetime NOT NULL,
  `experience_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_exp`
--

INSERT INTO `pf_exp` (`experience_aid`, `experience_is_active`, `experience_title`, `experience_description`, `experience_created`, `experience_updated`) VALUES
(1, 1, 'angkol', 'walengkoy', '2025-05-19 14:23:48', '2025-05-19 14:23:48'),
(2, 1, 'aaaaa', 'aaaaaaaa', '2025-05-19 14:24:17', '2025-05-19 14:24:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pf_exp`
--
ALTER TABLE `pf_exp`
  ADD PRIMARY KEY (`experience_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pf_exp`
--
ALTER TABLE `pf_exp`
  MODIFY `experience_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
