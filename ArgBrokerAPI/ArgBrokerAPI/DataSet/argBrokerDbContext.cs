using ArgBrokerAPI.Models.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace ArgBrokerAPI.DataSet
{
    public class argBrokerDbContext : DbContext
    {
        public argBrokerDbContext(DbContextOptions<argBrokerDbContext> options) : base(options)
        {
        }

        public DbSet<Compra> Compras { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}
