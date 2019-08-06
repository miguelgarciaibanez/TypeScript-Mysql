CREATE DATABASE `node-db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;


CREATE TABLE `node-db`.`heroes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL,
  `power` VARCHAR(50) NULL,
  PRIMARY KEY (`id`));


INSERT INTO `node-db`.`heroes`
(
`name`,
`power`)
VALUES
(
'IRONMAN',
'Money and tech');

INSERT INTO `node-db`.`heroes`
(
`name`,
`power`)
VALUES
(
'SPIDERMAN',
'Spider supoer power');

INSERT INTO `node-db`.`heroes`
(
`name`,
`power`)
VALUES
(
'HULK',
'Gamma ray');

INSERT INTO `node-db`.`heroes`
(
`name`,
`power`)
VALUES
(
'THOR',
'Hammer and god powers');