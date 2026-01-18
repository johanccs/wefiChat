using Microsoft.EntityFrameworkCore;
using System;
using WefiChatServer;
using WefiChatServer.Data;
using WefiChatServer.Features.Channels.Entities;
using WefiChatServer.Features.Channels.Services;
using WefiChatServer.Features.Chats.Entities;
using WefiChatServer.Features.Chats.Services;
using WefiChatServer.Features.Users.Entities;
using WefiChatServer.Features.Users.Services;

/***Outstanding steps
 * builder.WithOrigins("http://localhost:4200") // Add to appsettings.json
 * Add global exception
 ***/

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IChatService<Chat>, ChatService>();
builder.Services.AddScoped<IChannelService<Channel>, ChannelService>();
builder.Services.AddScoped<IUserSevice<User>, UserService>();

builder.Services.AddSignalR();
builder.Services.AddCors(config =>
{
    config.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:4200") // Add to appsettings.json
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
    });
});

builder.Services.AddDbContext<ApplicationDbContext>(config =>
{
    config.UseSqlite(builder.Configuration.GetConnectionString("Default"));
});

var app = builder.Build();

app.UseCors();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapHub<ChatHub>("/chatHub");

app.Run();
