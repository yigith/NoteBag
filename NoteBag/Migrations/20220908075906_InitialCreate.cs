using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NoteBag.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedTime = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    ModifiedTime = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "Id", "Content", "CreatedTime", "ModifiedTime", "Title" },
                values: new object[] { 1, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam alias illo vero nemo esse corrupti explicabo magni natus sunt consequatur quo voluptatum nisi accusamus rem, qui quia inventore rerum!", new DateTimeOffset(new DateTime(2022, 9, 8, 10, 59, 6, 435, DateTimeKind.Unspecified).AddTicks(2483), new TimeSpan(0, 3, 0, 0, 0)), new DateTimeOffset(new DateTime(2022, 9, 8, 10, 59, 6, 435, DateTimeKind.Unspecified).AddTicks(2523), new TimeSpan(0, 3, 0, 0, 0)), "Lorem Ipsum Dolor" });

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "Id", "Content", "CreatedTime", "ModifiedTime", "Title" },
                values: new object[] { 2, "Eius iste vitae commodi magnam odit maxime id officiis iusto. A modi quae fugit! Veritatis nihil dolorum repellat laudantium, unde quae a porro quod ipsam possimus, nulla vero praesentium eius?", new DateTimeOffset(new DateTime(2022, 9, 8, 10, 59, 6, 435, DateTimeKind.Unspecified).AddTicks(2528), new TimeSpan(0, 3, 0, 0, 0)), new DateTimeOffset(new DateTime(2022, 9, 8, 10, 59, 6, 435, DateTimeKind.Unspecified).AddTicks(2529), new TimeSpan(0, 3, 0, 0, 0)), "Quis Dolores Est" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Notes");
        }
    }
}
