using Microsoft.EntityFrameworkCore;

namespace Server.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) {}

        public DbSet<Game> Games { get; set; }
        public DbSet<Stream> Streams { get; set; }
        public DbSet<GamesOnStream> GamesOnStreams { get; set; }
    }
}