using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class NonTeachingStaff
    {
        [Key]
        public int NonStaffId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Qualification { get; set; }

        public string Designation { get; set; }

       
    }
}
