using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ArgBrokerAPI.Services;
using ArgBrokerAPI.Models.Entities;
using ArgBrokerAPI.Models.DTOs;
using ArgBrokerAPI.Models;

namespace ArgBrokerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompraController : Controller
    {
        private readonly CompraService _compraService;

        public CompraController(CompraService compraService)
        {
            _compraService = compraService;
        }


        /*   // GET: api/<CompraController>
           [HttpGet]
           public async Task<IActionResult> GetAllCompras()
           {
               var UsersList = await _compraService.GetAllCompras();
               return Ok(UsersList);
           }
        */


        [HttpGet("ComprasByClient/{clientid}")]
        public async Task<ActionResult<List<Compra>>> GetCompras(decimal clientid)
        {
            return await _compraService.GetCompras(clientid);
        }

        // POST api/<CompraController>
        [HttpPost("registro-compra")]
        public async Task<ActionResult<Compra>> PostUser([FromBody] CompraPostDTO newCompra)
        {
            try
            {
                var postCompra = await _compraService.PostNewCompra(newCompra);
                return postCompra;
            }
            catch (ErrorApi apiException)
            {
                return StatusCode(apiException.StatusCode, apiException.Content);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
