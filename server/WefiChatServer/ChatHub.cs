using Microsoft.AspNetCore.SignalR;
using WefiChatServer.Features.Chats.Entities;
using WefiChatServer.Features.Chats.Services;

namespace WefiChatServer
{
    public class ChatHub(IChatService<Chat> chatService): Hub
    {
        public async Task SendChat(string user, string message, string channel)
        {
            await chatService.AddEntity(new Chat
            {
                Channel = channel,
                Date = DateTime.Now,
                Message = message,
                User = user
            });
            await Clients.All.SendAsync("ReceiveChat", user, message, channel);
        }
    }
}
