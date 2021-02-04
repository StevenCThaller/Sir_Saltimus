using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GameId",
                table: "Streams",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Streams_GameId",
                table: "Streams",
                column: "GameId");

            migrationBuilder.AddForeignKey(
                name: "FK_Streams_Games_GameId",
                table: "Streams",
                column: "GameId",
                principalTable: "Games",
                principalColumn: "GameId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Streams_Games_GameId",
                table: "Streams");

            migrationBuilder.DropIndex(
                name: "IX_Streams_GameId",
                table: "Streams");

            migrationBuilder.DropColumn(
                name: "GameId",
                table: "Streams");
        }
    }
}
