using ArgBrokerAPI.Models.Entities;
using ArgBrokerAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ArgBrokerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : Controller
    {
        private readonly ClienteService _clienteService;
        public ClienteController(ClienteService clienteService)
        {
            _clienteService = clienteService;
        }
        [HttpGet("dineroByClient/{clientid}")]
        public async Task<ActionResult<decimal>> GetCompras(int clientid)
        {
            return await _clienteService.GetDineroByClientId(clientid);
        }

    }
}
