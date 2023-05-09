#creacion base de datos
CREATE DATABASE printered CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

#creacion de tabla en esquema printered
create table printered.usuarios (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(250),
    password VARCHAR(250)
);

insert into
    printered.usuarios
values
    (1, 'Mauro', md5(1234));

select
    *
from
    printered.usuarios;