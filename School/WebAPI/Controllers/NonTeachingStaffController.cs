using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NonTeachingStaffController : ControllerBase
    {

        SchoolDBContext dbContext;

        public NonTeachingStaffController(SchoolDBContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public List<NonTeachingStaff> Get()
        {



            List<NonTeachingStaff> lst1 = dbContext.NonTeachingStaff.ToList();
            return lst1;

        }

        [HttpPost]
        public void Post(NonTeachingStaff nonteachingStaff)
        {
            object value = dbContext.NonTeachingStaff.Add(nonteachingStaff);
            dbContext.SaveChanges();
        }

        [HttpPut]

        public void Put(NonTeachingStaff nonteachingStaff
            )
        {
            dbContext.NonTeachingStaff.Update(nonteachingStaff);
            dbContext.SaveChanges();
        }

        [HttpDelete("{id}")]

        public void Delete(int id)
        {
            var nonteachingStaff = dbContext.NonTeachingStaff.Find(id);
            if (nonteachingStaff != null)
            {
                dbContext.NonTeachingStaff.Remove(nonteachingStaff);
                dbContext.SaveChanges();
            }
        }
    }
}
