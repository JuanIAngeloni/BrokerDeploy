using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ArgBrokerAPI.Models.Entities
{
    public class Compra
    {
        [Key]
        public int IdCompra { get; set; }
        public string Nombre { get; set; }
        public string Simbolo { get; set; }
        public decimal Comision { get; set; }
        public double Cantidad { get; set; }
        public decimal Precio { get; set; }
        public DateTime Fecha { get; set; }

            [ForeignKey("Cliente")]
            public int IdCliente { get; set; }
            public Cliente Cliente { get; set;}

    }

}
    