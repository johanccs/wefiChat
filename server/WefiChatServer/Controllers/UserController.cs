using Microsoft.AspNetCore.Mvc;
using WefiChatServer.Dtos;
using WefiChatServer.Enums;
using WefiChatServer.Features.Users.Entities;
using WefiChatServer.Features.Users.Services;


namespace WefiChatServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(IUserSevice<User> userService, ILogger<UserController> logger) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAll()
        {
            var users = await userService.GetAllEntities();

            if(users == null)
            {
                logger.LogInformation("No users found");
                return NotFound();
            }

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(int id)
        {
            var user = await userService.GetById(id);

            if (user == null)
            {
                logger.LogInformation("No user {id} found", id); //Structured loggin
                return NotFound();
            }

            return Ok(user);
        }

        [HttpGet("search/{name}")]
        public async Task<ActionResult<User>> GetByName(string name)
        {
            var user = await userService.GetByName(name);

            if (user == null)
            {
                logger.LogInformation("No user {id} found", name); //Structured loggin
                return BadRequest(new UserExceptionDto(Errors.UserDoesNotExist));
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] NewUserDto request)
        {
            var existingUser = await userService.GetByName(request.Name);

            if(existingUser != null)
            {
                return BadRequest(new UserExceptionDto(Errors.UserAlreadyExists, request.Name));
            }

            var result = await userService.AddEntity(new User { Name = request.Name });

            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await userService.DeleteByIdAsync(id);

            return Ok("User deleted");
        }
    }
}
