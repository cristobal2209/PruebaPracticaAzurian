# Prueba de práctica en Azurian
Este programa se encarga de disponibilizar a un cliente una tabla de países desde una base de datos. El cliente hecho en AngularCLI, puede realizar las acciones de ver todos los países, agregar un país o borrar un país. El cliente es capaz de conectarse a un backend realizado con Springboot, donde éste a su vez se conecta a una base de datos MySQL, donde se almacenan los datos de los países.

## Tecnologías ocupadas
* AngularCLI 15.
* Springboot v2.7.5 (incluyendo dependencias de Springboot web y JPA).
* JDK 17.
* Maven 3.8.6.
* Visual Studio Code como editor de código.

### Extensiones de Visual Studio Code
* Extension Pack for Java.
* Spring Boot Extension Pack.


## Scripts de creación de tablas y datos en MySQL.

Creación de la tabla 'country' en el schema 'prueba-azurian', conteniendo los atributos 'id', 'name', 'president', y 'continent':
```sql
create table `prueba-azurian`.`country` (
  `id` INT not null,
  `name` VARCHAR(255),
  `president` VARCHAR(255),
  `continent` VARCHAR(255),
  PRIMARY KEY (`id`)
);
```
Insertando datos iniciales en la tabla 'country':
```sql
insert into country (id, name, president, continent)
values 
(1, "Chile", "Gabriel Boric", "America"),
(2, "Mexico", "Andrés Manuel López Obrador", "America"),
(3, "Peru", "Pedro Castillo", "America"),
(4, "Ecuador", "Guillermo Lasso", "America"),
(5, "Alemania", "Frank-Walter Steinmeier", "Europa");
```
