using ArgBrokerAPI.DataSet;
using ArgBrokerAPI.Services;
using ArgBrokerAPI.Services.Imp;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Runtime.CompilerServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

const string ConnectionName = "argBrokerDB";
var connectionString = builder.Configuration.GetConnectionString(ConnectionName);

builder.Services.AddDbContext<argBrokerDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<UserService,UserServiceImp>();
builder.Services.AddScoped<ClienteService, ClienteServiceImp>();
builder.Services.AddScoped<CompraService, CompraServiceImp>();




builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CorsPolicy", builder =>
    {
        builder.AllowAnyOrigin(); // PERMITE DESDE CUALQUIER    ORGIEN
        builder.AllowAnyMethod(); // CUALQUIER METODO GET, PUT , DROP
        builder.AllowAnyHeader(); // CUALQUIER CABECERA 
    });
});

var app = builder.Build();

/*// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}*/

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();
// 6 Tell app to use CORS 
app.UseCors("CorsPolicy");
app.MapControllers();

app.Run();
//dotnet ef dbcontext scaffold argBrokerDB Microsoft.EntityFrameworkCore.SqlServer -o Entities 
// dotnet ef dbcontext scaffold argBrokerDB Microsoft.EntityFrameworkCore.SqlServer -o Entities --project option