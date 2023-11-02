using System.ComponentModel.DataAnnotations;

namespace ArgBrokerAPI.Models.Entities
{
    public class Usuario
    {
        [Key]
        public int IdUsuario { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Dni { get; set; }
        public string Correo { get; set; }
        public DateTime Nacimiento { get; set; }
        public string Contraseña { get; set; }
        public string Telefono { get; set; }
    }
}
