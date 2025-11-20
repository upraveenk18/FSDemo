using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class SchoolDBContext : DbContext
    {
        internal object teachingStaff;

        public SchoolDBContext(DbContextOptions<SchoolDBContext> options) : base(options)
        {
            
        }
        public DbSet<Student> Student { get; set; }
        public DbSet<TeachingStaff> TeachingStaff { get; set; }
        public DbSet<NonTeachingStaff> NonTeachingStaff { get; set; }

    }
}
