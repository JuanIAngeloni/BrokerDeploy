namespace ArgBrokerAPI.Models.DTOs
{
    public class CompraPostDTO
    {
        public string Nombre { get; set; }
        public string Simbolo { get; set; }
        public decimal Comision { get; set; }
        public int Cantidad { get; set; }
        public decimal Precio { get; set; }
        public int idCliente { get; set; }
        public DateTime Fecha { get; set; }
    }
}
