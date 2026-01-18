using Microsoft.AspNetCore.SignalR;
using WefiChatServer.Features.Chats.Entities;
using WefiChatServer.Features.Chats.Services;

namespace WefiChatServer
{
    public class ChatHub(IChatService<Chat> chatService): Hub
    {
        public async Task JoinChannel(string channel)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, channel);
        }

        public async Task LeaveChannel(string channel)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, channel);
        }

        public async Task SendChatToChannel(string channel, string user, string message)
        {
            await Clients.Group(channel).SendAsync("ReceiveChat", user, message, channel);
        }

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
