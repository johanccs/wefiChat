namespace WefiChatServer.Features
{
    public interface IBaseService<T> where T : class
    {
        Task<IEnumerable<T>> GetAllEntities();

        Task<T> AddEntity(T entity);
    }
}
