using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class TeachingStaff
    {
        [Key]
        public int StaffId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Qualification { get; set; }
        public string Designation { get; set; }
    }
}
