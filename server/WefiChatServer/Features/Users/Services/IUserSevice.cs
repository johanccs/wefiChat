namespace WefiChatServer.Features.Users.Services
{
    public interface IUserSevice<T>: IBaseService<T> where T : class
    {
        Task<T> GetById(int id);
        Task<T>GetByName(string name);

        Task DeleteByIdAsync(int id);
    }
}
