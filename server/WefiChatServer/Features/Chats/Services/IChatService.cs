using WefiChatServer.Features.Chats.Entities;

namespace WefiChatServer.Features.Chats.Services
{
    public interface IChatService<T> : IBaseService<T> where T: class
    {
        Task<Chat?> GetByChannelId(int channelId);
    }
}
