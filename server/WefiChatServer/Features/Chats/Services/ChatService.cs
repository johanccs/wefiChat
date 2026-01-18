using Microsoft.EntityFrameworkCore;
using WefiChatServer.Data;
using WefiChatServer.Features.Chats.Entities;

namespace WefiChatServer.Features.Chats.Services
{
    public class ChatService(ApplicationDbContext dbContext) : IChatService<Chat>
    {
        public async Task<Chat> AddEntity(Chat entity)
        {
            await dbContext.Chats.AddAsync(entity);

            await dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task<IEnumerable<Chat>> GetAllEntities()
        {
            var chats = await dbContext.Chats.AsNoTracking().ToListAsync();

            return chats;
        }

        public async Task<Chat?> GetByChannelName(string channel)
        {
            Chat? chat = await dbContext.Chats.Where(c => c.Channel == channel).FirstOrDefaultAsync()!;

            return chat;
        }
    }
}
