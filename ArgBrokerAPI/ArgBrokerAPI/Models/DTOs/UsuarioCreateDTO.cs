namespace ArgBrokerAPI.Models.DTOs
{
    public class UsuarioCreateDTO
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Dni { get; set; }
        public string Correo { get; set; }
        public DateTime Nacimiento { get; set; }
        public string Contraseña { get; set; }
        public string Telefono { get; set; }
    }
}
