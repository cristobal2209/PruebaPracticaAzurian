# PruebaPracticaAzurian
Repositorio para la prueba de práctica de Azurian

Scripts de creación de tablas y datos en MySQL.

Creación de la tabla 'pais' en el schema 'prueba-azurian', conteniendo los atributos 'IDPais', 'NombrePais', 'Presidente', y 'Continente'.
create table `prueba-azurian`.`pais` (
  `IDPais` SMALLINT not null,
  `NombrePais` VARCHAR(45) not null,
  `Presidente` VARCHAR(45) not null,
  `Continente` VARCHAR(45) not null,
  PRIMARY KEY (`IDPais`)
);

Insertando datos en la tabla 'pais'.
insert into pais (IDPais, NombrePais, Presidente, Continente)
values 
(1, "Chile", "Gabriel Boric", "America"),
(2, "Mexico", "Andrés Manuel López Obrador", "America"),
(3, "Peru", "Pedro Castillo", "America"),
(4, "Ecuador", "Guillermo Lasso", "America"),
(5, "Alemania", "Frank-Walter Steinmeier", "Europa");
