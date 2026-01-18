using WefiChatServer.Features.Channels.Entities;

namespace WefiChatServer.Features.Channels.Services
{
    public interface IChannelService<T> : IBaseService<T> where T : class
    {
        Task<Channel> GetById(int id);

        Task DeleteEntity(int id);
    }
}
