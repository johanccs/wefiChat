using Microsoft.EntityFrameworkCore;
using WefiChatServer.Data;
using WefiChatServer.Features.Users.Entities;

namespace WefiChatServer.Features.Users.Services
{
    public class UserService(ApplicationDbContext dbContext) : IUserSevice<User>
    {
        public async Task<User> AddEntity(User entity)
        {
            await dbContext.Users.AddAsync(entity);

            var result = await dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task DeleteByIdAsync(int id)
        {
            await dbContext.Users.Where(c => c.Id == id).ExecuteDeleteAsync();
        }

        public async Task<IEnumerable<User>> GetAllEntities()
        {
            return await dbContext.Users.AsNoTracking().ToListAsync();
        }

        public async Task<User> GetById(int id)
        {
            var result = await dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);

            return result!;
        }

        public async Task<User> GetByName(string name)
        {
            var result = await dbContext.Users.FirstOrDefaultAsync(x => x.Name == name);

            return result!;
        }
    }
}
