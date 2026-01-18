namespace WefiChatServer.Features.Chats.Entities
{
    public class Chat
    {
        public int Id { get; set; }
        public required string User { get; set; }
        public required string  Message { get; set; }
        public required DateTime Date { get; set; }
        public required int ChannelId { get; set; }

    }
}
