using Newtonsoft.Json;

namespace ArgBrokerAPI.Models.DTOs
{
    public class UsuarioLoginDTO
    {
        public string Correo { get; set; }
        
        public string password { get; set; }
    }
}
