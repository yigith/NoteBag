using Microsoft.EntityFrameworkCore;

namespace NoteBag.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Note> Notes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Note>().HasData(
                new Note()
                {
                    Id = 1,
                    Title = "Lorem Ipsum Dolor",
                    Content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam alias illo vero nemo esse corrupti explicabo magni natus sunt consequatur quo voluptatum nisi accusamus rem, qui quia inventore rerum!"
                },
                new Note()
                {
                    Id = 2,
                    Title = "Quis Dolores Est",
                    Content = "Eius iste vitae commodi magnam odit maxime id officiis iusto. A modi quae fugit! Veritatis nihil dolorum repellat laudantium, unde quae a porro quod ipsam possimus, nulla vero praesentium eius?"
                }
                );
        }
    }
}
