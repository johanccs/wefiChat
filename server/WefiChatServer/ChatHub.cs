using Microsoft.AspNetCore.SignalR;
using WefiChatServer.Features.Chats.Entities;
using WefiChatServer.Features.Chats.Services;

namespace WefiChatServer
{
    public class ChatHub(IChatService<Chat> chatService): Hub
    {
        public async Task SendChat(string user, string message)
        {
            await chatService.AddEntity(new Chat
            {
                ChannelId = 1,
                Date = DateTime.Now,
                Message = message,
                User = user
            });
            await Clients.All.SendAsync("ReceiveChat", user, message);
        }
    }
}
