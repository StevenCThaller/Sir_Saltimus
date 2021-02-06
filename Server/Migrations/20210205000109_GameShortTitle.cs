using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class GameShortTitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ShortenedTitle",
                table: "Games",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ShortenedTitle",
                table: "Games");
        }
    }
}
