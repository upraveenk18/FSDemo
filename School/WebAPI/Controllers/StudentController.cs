

using Microsoft.AspNetCore.Mvc;


using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {


        SchoolDBContext dbContext;
        public StudentController(SchoolDBContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public List<Student> Get()
        {



            //List<Student> lst = new List<Student>();
            //lst.Add(new Student
            //{
            //    studentId = 1,
            //    firstName = "John",
            //});
            //lst.Add(new Student
            //{
            //    studentId = 2,
            //    firstName = "John",
            //}); lst.Add(new Student
            //{
            //    studentId = 3,
            //    firstName = "John",
            //}); lst.Add(new Student
            //{
            //    studentId = 4,
            //    firstName = "John",
            //});


            List<Student> lst1 = dbContext.Student.ToList();
            return lst1;

        }

        [HttpPost]
        public void Post(Student student)
        {
            dbContext.Student.Add(student);
            dbContext.SaveChanges();
        }

        [HttpPut]

        public void Put(Student student)
        {
            dbContext.Student.Update(student);
            dbContext.SaveChanges();
        }

        [HttpDelete("{id}")]

        public void Delete(int id)
        {
            var student = dbContext.Student.Find(id);
            if (student != null)
            {
                dbContext.Student.Remove(student);
                dbContext.SaveChanges();
            }
        }
    }
}

