using Microsoft.EntityFrameworkCore;
using WefiChatServer.Features.Channels.Entities;
using WefiChatServer.Features.Chats.Entities;

namespace WefiChatServer.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Chat> Chats { get; set; }

        public DbSet<Channel> Channels { get; set; }
    }
}
