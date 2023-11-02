using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ArgBrokerAPI.Models.Entities
{
    public class Cliente
    {
        [Key]
        public int IdCliente { get; set; }
        public decimal Dinero { get; set; }

        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
