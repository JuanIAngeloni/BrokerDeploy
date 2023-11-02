using ArgBrokerAPI.Models.DTOs;
using ArgBrokerAPI.Models.Entities;

namespace ArgBrokerAPI.Services
{
        public interface UserService
        {
                Task<IEnumerable<Usuario>> GetAllUsers();
                Task<Usuario> PostNewUser(Usuario newUser);

                Task<Usuario> LogginUser(UsuarioLoginDTO logUser);
                Task<Usuario> PutUser(Usuario user, int id);
        }
}
