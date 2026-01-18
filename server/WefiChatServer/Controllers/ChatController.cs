using Microsoft.AspNetCore.Mvc;
using WefiChatServer.Features.Chats.Entities;
using WefiChatServer.Features.Chats.Services;

namespace WefiChatServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController(IChatService<Chat>chatService, ILogger<ChatController>logger) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<Chat>> GetAll()
        {
            var chats = await chatService.GetAllEntities();

            if(chats == null)
            {
                logger.LogInformation("No chats found");
                return NotFound();
            }

            return Ok(chats);
        }

       
    }
}
