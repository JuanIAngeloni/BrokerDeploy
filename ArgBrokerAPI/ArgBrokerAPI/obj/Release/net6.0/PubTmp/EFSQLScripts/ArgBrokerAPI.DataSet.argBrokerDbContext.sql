IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231102192139_createTables')
BEGIN
    CREATE TABLE [Usuarios] (
        [IdUsuario] int NOT NULL IDENTITY,
        [Nombre] nvarchar(max) NOT NULL,
        [Apellido] nvarchar(max) NOT NULL,
        [Dni] int NOT NULL,
        [Correo] nvarchar(max) NOT NULL,
        [Nacimiento] datetime2 NOT NULL,
        [Contraseña] nvarchar(max) NOT NULL,
        [Telefono] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Usuarios] PRIMARY KEY ([IdUsuario])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231102192139_createTables')
BEGIN
    CREATE TABLE [Clientes] (
        [IdCliente] int NOT NULL IDENTITY,
        [Dinero] decimal(18,2) NOT NULL,
        [UsuarioId] int NOT NULL,
        CONSTRAINT [PK_Clientes] PRIMARY KEY ([IdCliente]),
        CONSTRAINT [FK_Clientes_Usuarios_UsuarioId] FOREIGN KEY ([UsuarioId]) REFERENCES [Usuarios] ([IdUsuario]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231102192139_createTables')
BEGIN
    CREATE TABLE [Compras] (
        [IdCompra] int NOT NULL IDENTITY,
        [Nombre] nvarchar(max) NOT NULL,
        [Simbolo] nvarchar(max) NOT NULL,
        [Comision] decimal(18,2) NOT NULL,
        [Cantidad] float NOT NULL,
        [Precio] decimal(18,2) NOT NULL,
        [Fecha] datetime2 NOT NULL,
        [IdCliente] int NOT NULL,
        CONSTRAINT [PK_Compras] PRIMARY KEY ([IdCompra]),
        CONSTRAINT [FK_Compras_Clientes_IdCliente] FOREIGN KEY ([IdCliente]) REFERENCES [Clientes] ([IdCliente]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231102192139_createTables')
BEGIN
    CREATE INDEX [IX_Clientes_UsuarioId] ON [Clientes] ([UsuarioId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231102192139_createTables')
BEGIN
    CREATE INDEX [IX_Compras_IdCliente] ON [Compras] ([IdCliente]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231102192139_createTables')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231102192139_createTables', N'7.0.12');
END;
GO

COMMIT;
GO

