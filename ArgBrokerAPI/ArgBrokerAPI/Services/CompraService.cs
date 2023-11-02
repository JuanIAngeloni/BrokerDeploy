using ArgBrokerAPI.Models.DTOs;
using ArgBrokerAPI.Models.Entities;

namespace ArgBrokerAPI.Services
{
    public interface CompraService
    {
        Task<List<Compra>> GetCompras(decimal id);
        Task<Compra> PostNewCompra(CompraPostDTO compra);
    }
}
