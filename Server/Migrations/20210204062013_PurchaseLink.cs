using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class PurchaseLink : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PurchaseLink",
                table: "Games",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PurchaseLink",
                table: "Games");
        }
    }
}
