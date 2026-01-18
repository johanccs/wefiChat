using Microsoft.EntityFrameworkCore;
using WefiChatServer.Data;

namespace WefiChatServer.Features.Channels.Services
{
    public class ChannelService (ApplicationDbContext dbContext): IChannelService<Entities.Channel>
    {
        public async Task<Entities.Channel> AddEntity(Entities.Channel entity)
        {
            await dbContext.Channels.AddAsync(entity);
            await dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task DeleteEntity(int id)
        {
            await dbContext.Channels.Where(c => c.Id == id).ExecuteDeleteAsync();
        }

        public async Task<IEnumerable<Entities.Channel>> GetAllEntities()
        {
            var channels = await dbContext.Channels.AsNoTracking().ToListAsync();

            return channels;
        }

        public async Task<Entities.Channel> GetById(int id)
        {
            var channel = await dbContext.Channels.Where(c => c.Id == id).FirstOrDefaultAsync();

            return channel!;
        }
    }
}
