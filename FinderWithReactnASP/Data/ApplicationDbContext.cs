using FinderWithReactnASP.Models;
using Microsoft.EntityFrameworkCore;

namespace FinderWithReactnASP.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // DbSets for your entities
        public DbSet<User> Users { get; set; }
        public DbSet<Accommodation> Accommodations { get; set; }
        public DbSet<Rating> Ratings { get; set; }
    }
}
