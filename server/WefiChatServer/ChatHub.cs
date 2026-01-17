using Microsoft.AspNetCore.SignalR;

namespace WefiChatServer
{
    public class ChatHub: Hub
    {
        public async Task SendChat(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveChat", user, message);
        }
    }
}
