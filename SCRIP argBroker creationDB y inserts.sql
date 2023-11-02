create database argBroker

use argBroker

CREATE TABLE Compras (
  IdCompra INT IDENTITY(1,1) NOT NULL,
  IdCliente INT NOT NULL,
  IdAccion INT NOT NULL,
  Comision INT NOT NULL,
  Cantidad FLOAT NOT NULL,
  Precio DECIMAL(24,4) NOT NULL,
  Fecha DATETIME NOT NULL,
  CONSTRAINT PK_Compra PRIMARY KEY (IdCompra),
  CONSTRAINT FK_Compra_Cliente FOREIGN KEY (IdCliente) REFERENCES Cliente (IdCliente),
  CONSTRAINT FK_Compra_Accion FOREIGN KEY (IdAccion) REFERENCES Accion (IdAccion)
);
CREATE TABLE Clientes (
  IdCliente INT IDENTITY(1,1) NOT NULL,
  IdUsuario INT NOT NULL,
  CONSTRAINT PK_Cliente PRIMARY KEY (IdCliente),
  CONSTRAINT FK_Cliente_Usuario FOREIGN KEY (IdUsuario) REFERENCES Usuario (IdUsuario)
);
CREATE TABLE Acciones (
  IdAccion INT IDENTITY(1,1) NOT NULL,
  Simbolo VARCHAR(30) NOT NULL,
  Descripcion VARCHAR(200) NOT NULL,
  UltimoPrecio DECIMAL(24,4) NOT NULL,
  Cantidad INT NOT NULL,
  CONSTRAINT PK_Accion PRIMARY KEY (IdAccion)
);
CREATE TABLE Usuarios (
  IdUsuario INT IDENTITY(1,1) NOT NULL,
  Nombre VARCHAR(50) NOT NULL,
  Apellido VARCHAR(30) NOT NULL,
  Dni INT NOT NULL,
  Correo VARCHAR(80) NOT NULL,
  Nacimiento DATETIME NOT NULL,
  Contraseña VARCHAR(255) NOT NULL,
  Telefono VARCHAR(40) NOT NULL,
  CONSTRAINT PK_Usuario PRIMARY KEY (IdUsuario)
);


INSERT INTO Acciones (Simbolo, Descripcion, UltimoPrecio, Cantidad)
VALUES ('Simbolo1', 'Descripción 1', 100.00, 500);

INSERT INTO Acciones (Simbolo, Descripcion, UltimoPrecio, Cantidad)
VALUES ('Simbolo2', 'Descripción 2', 150.00, 300);
-- Agrega más filas según sea necesario




INSERT INTO Usuarios (Nombre, Apellido, Dni, Correo, Nacimiento, Contraseña, Telefono)
VALUES ('Nombre1', 'Apellido1', 123456789, 'correo1@example.com', '1990-01-01', 'contraseña1', '123-456-7890');

INSERT INTO Usuarios (Nombre, Apellido, Dni, Correo, Nacimiento, Contraseña, Telefono)
VALUES ('Nombre2', 'Apellido2', 987654321, 'correo2@example.com', '1995-02-02', 'contraseña2', '987-654-3210');
-- Agrega más filas según sea necesario



-- Asegúrate de que los IdUsuario existan en la tabla Usuario antes de insertar en Cliente
INSERT INTO Clientes (IdUsuario)
VALUES (1);  -- Suponiendo que 1 es el IdUsuario correspondiente
-- Agrega más filas según sea necesario


-- Asegúrate de que los IdCliente e IdAccion existan en las tablas Cliente y Accion, respectivamente, antes de insertar en Compra
INSERT INTO Compras (IdCliente, IdAccion, Comision, Cantidad, Precio, Fecha)
VALUES (1, 1, 10, 20.5, 100.00, '2023-10-16 10:00:00');  -- Suponiendo que 1 y 1 son los IdCliente e IdAccion correspondientes
-- Agrega más filas según sea necesario














