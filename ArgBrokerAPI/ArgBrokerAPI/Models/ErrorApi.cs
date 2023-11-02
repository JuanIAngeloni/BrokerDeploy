using Microsoft.AspNetCore.Http;

namespace ArgBrokerAPI.Models
{
    public class ErrorApi : Exception
    {
        public int StatusCode { get; set; }  // Código de estado HTTP
        public string Content { get; set; }  // Contenido del mensaje de error


        public ErrorApi(int statusCode, string content)
        {
            StatusCode = statusCode;
            Content = content;
        }
    }
}
