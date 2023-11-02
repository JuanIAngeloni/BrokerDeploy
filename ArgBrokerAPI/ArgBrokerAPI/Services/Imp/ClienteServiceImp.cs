using ArgBrokerAPI.DataSet;
using ArgBrokerAPI.Models.Entities;
using ArgBrokerAPI.Services;
using Microsoft.EntityFrameworkCore;

public class ClienteServiceImp : ClienteService
{
    private readonly argBrokerDbContext _dbContext;


    public ClienteServiceImp(argBrokerDbContext dbContext)
    {
        _dbContext = dbContext;

    }

    public async Task<Cliente> GetClienteById(int idCliente)
    {
        try
        {
            var cliente = await _dbContext.Clientes.FirstOrDefaultAsync(c => c.IdCliente == idCliente);

            if (cliente != null)
            {
                return cliente;
            }
            else
            {
                throw new Exception("Debe iniciar sesion para realizar una compra");
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    public async Task<decimal> GetDineroByClientId(int idCliente)
    {
        try
        {
            var cliente = await _dbContext.Clientes.FirstOrDefaultAsync(c => c.IdCliente == idCliente);

            if (cliente != null)
            {
                return cliente.Dinero;
            }
            else
            {
                throw new Exception("Cliente no encontrado");
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    public async Task<Cliente> RegisterNewClient(Usuario newUsuario)
    {
        try
        {
            Usuario userInserted = await _dbContext.Usuarios.FindAsync(newUsuario.IdUsuario);

            var newClient = new Cliente
            {
                Dinero = 1000000,
                Usuario = userInserted 
            };

            _dbContext.Add(newClient);
            await _dbContext.SaveChangesAsync();

            return newClient;
        }
        catch (Exception ex)
        {
            throw new ApplicationException("Hubo un error al crear el cliente.", ex);
        }
    }

}