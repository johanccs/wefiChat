using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WefiChatServer.Migrations
{
    /// <inheritdoc />
    public partial class ModifyChatTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ChannelId",
                table: "Chats");

            migrationBuilder.AddColumn<string>(
                name: "Channel",
                table: "Chats",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Channel",
                table: "Chats");

            migrationBuilder.AddColumn<int>(
                name: "ChannelId",
                table: "Chats",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
