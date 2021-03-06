-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 31 mars 2018 à 02:04
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `trump`
--

-- --------------------------------------------------------

--
-- Structure de la table `bonus`
--

DROP TABLE IF EXISTS `bonus`;
CREATE TABLE IF NOT EXISTS `bonus` (
  `bonus 1` int(11) NOT NULL,
  `bonus 2` int(11) NOT NULL,
  `bonus 3` int(11) NOT NULL,
  `bonus 4` int(11) NOT NULL,
  PRIMARY KEY (`bonus 4`,`bonus 1`,`bonus 2`,`bonus 3`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `ivanka`
--

DROP TABLE IF EXISTS `ivanka`;
CREATE TABLE IF NOT EXISTS `ivanka` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `POS-X` int(11) DEFAULT NULL,
  `POS-y` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `map`
--

DROP TABLE IF EXISTS `map`;
CREATE TABLE IF NOT EXISTS `map` (
  `maison blanche` int(11) NOT NULL AUTO_INCREMENT,
  `POS-X` int(11) DEFAULT NULL,
  `POS-Y` int(11) DEFAULT NULL,
  PRIMARY KEY (`maison blanche`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `melania`
--

DROP TABLE IF EXISTS `melania`;
CREATE TABLE IF NOT EXISTS `melania` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HP` int(11) DEFAULT NULL,
  `POS-X` int(10) UNSIGNED DEFAULT NULL,
  `POS-Y` int(10) UNSIGNED DEFAULT NULL,
  `CAPACITY-0` int(11) DEFAULT NULL,
  `CAPACITY-2` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `melania`
--

INSERT INTO `melania` (`ID`, `HP`, `POS-X`, `POS-Y`, `CAPACITY-0`, `CAPACITY-2`) VALUES
(3, 100, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `president`
--

DROP TABLE IF EXISTS `president`;
CREATE TABLE IF NOT EXISTS `president` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HP` int(11) DEFAULT NULL,
  `POS-X` int(10) UNSIGNED DEFAULT NULL,
  `POS-Y` int(10) UNSIGNED DEFAULT NULL,
  `CAPACITY-0` int(11) DEFAULT NULL,
  `CAPACITY-2` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `president`
--

INSERT INTO `president` (`ID`, `HP`, `POS-X`, `POS-Y`, `CAPACITY-0`, `CAPACITY-2`) VALUES
(101, 100, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
