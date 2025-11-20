using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachingStaffController : ControllerBase
    {
        SchoolDBContext dbContext;

        public TeachingStaffController(SchoolDBContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public List<TeachingStaff> Get()
        {



            //List<TeachingStaff> lst = new List<teachingStaff>();
            //lst.Add(new Teacher
            //{
            //    TeachingStaffId = 1,
            //    firstName = "John",
            //});
            //lst.Add(new Teacher
            //{
            //    TeachingStaffId = 2,
            //    firstName = "John",
            //}); lst.Add(new Teacher
            //{
            //    TeachingStaffId = 3,
            //    firstName = "John",
            //}); lst.Add(new Teacher
            //{
            //    TeachingStaffId = 4,
            //    firstName = "John",
            //});


            List<TeachingStaff> lst1 = dbContext.TeachingStaff.ToList();
            return lst1;

        }

        [HttpPost]
        public void Post(TeachingStaff teachingStaff)
        {
            dbContext.TeachingStaff.Add(teachingStaff);
            dbContext.SaveChanges();
        }

        [HttpPut]

        public void Put(TeachingStaff teachingStaff
            )
        {
            dbContext.TeachingStaff.Update(teachingStaff);
            dbContext.SaveChanges();
        }

        [HttpDelete("{id}")]

        public void Delete(int id)
        {
            var teachingStaff = dbContext.TeachingStaff.Find(id);
            if (teachingStaff != null)
            {
                dbContext.TeachingStaff.Remove(teachingStaff);
                dbContext.SaveChanges();
            }
        }
    }
}

