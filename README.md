# Prueba de práctica en Azurian
Este programa se encarga de disponibilizar a un cliente una tabla de países desde una base de datos. El cliente hecho en AngularCLI, puede realizar las acciones de ver todos los países, agregar un país o borrar un país. El cliente es capaz de conectarse a un backend realizado con Springboot, donde éste a su vez se conecta a una base de datos MySQL, donde se almacenan los datos de los países.

## Tecnologías ocupadas
* AngularCLI 15.
* Springboot v2.7.5 (incluyendo dependencias de Springboot web y JPA).
* JDK 17.
* Maven 3.8.6.
* MySQL 8.0.
* Visual Studio Code como editor de código.
* MySQL Workbench para manipulación de la base de datos.

### Extensiones de Visual Studio Code
* Extension Pack for Java (Este permite trabajar con Maven en VSC).
* Spring Boot Extension Pack (Este permite trabajar con SB en VSC).

### Librerías ocupadas en AngularCLI
* bootstrap@5.2.3

## Scripts de creación de tablas y datos en MySQL.

Creación de la tabla 'country', conteniendo los atributos 'id', 'name', 'president', y 'continent':
```sql
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `continent` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `president` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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

## Manipulación de conexón
Para cambiar los parámetros de conexiones, tanto para front-end como back-end se debe realizar lo siguiente:
### Cambiar parámetros de conexión front-end
* Ir al archivo 'environment.ts' en "front-end\angularFrontEnd\src\environments\environment.ts"
* 'apiBaseUrl' contiene la url donde se encuentre el back-end.
### Cambiar parámetros de conexión back-end
* Ir al archivo 'applicaction.properties' en "back-end\proyecto1\src\main\resources\application.properties"
* 'spring.datasource.url' contiene la url a la BD.
* 'spring.datasource.username' y 'spring.datasource.password' contiene las credenciales para entrar a la BD.

## Notas
### Por problemas de tiempo, no se pudo implementar lo siguiente: 
* La paginación en tabla: Esto debido a que se pensó ocupar angularMaterials para la paginación, pero al momento de implementar esta librería, se crea una incompatibilidad entre el código de tablas realizado con boostrap y el cómo funcionan las paginaciones en angularMaterials, caso similar con ngx-pagination.
* Implementación de testeos: Implementar los tests a consultas http por cada módulo que lo necesite es un proceso largo, que no se alcanzó a realizar.

El código no tiene alguna instancia de distribución, se debe crear si fuese necesario.
No se implementaron métodos de manejo de persistencia de la base de datos.

## Referencias
filtro CORS realizado por juniorro, recuperado de https://github.com/getarrays/employeemanager
