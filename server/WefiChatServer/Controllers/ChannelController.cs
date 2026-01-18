using Microsoft.AspNetCore.Mvc;
using WefiChatServer.Dtos;
using WefiChatServer.Features.Channels.Entities;
using WefiChatServer.Features.Channels.Services;
using WefiChatServer.Features.Chats.Entities;
using WefiChatServer.Features.Chats.Services;

namespace WefiChatServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChannelController(IChannelService<Channel> channelService,
                    IChatService<Chat> chatService,
                    ILogger<ChannelController>logger) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Channel>>> GetAll()
        {
            var channels = await channelService.GetAllEntities();

            if(channels == null)
            {
                logger.LogInformation("No channels found");
                return NotFound();
            }

            return Ok(channels);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Channel>> GetById(int id)
        {
            var channel = await channelService.GetById(id);

            if (channel == null)
            {
                logger.LogInformation("No channel {id} found", id);
                return NotFound();
            }

            return Ok(channel);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] NewChannelDto request)
        {
            var result = await channelService.AddEntity(new Channel { Name = request.Name });

            return CreatedAtAction(nameof(GetById), new {id=result.Id}, result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await channelService.DeleteEntity(id);

            return Ok("Channel deleted");
        }
    }
}
