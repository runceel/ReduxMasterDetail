using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Http;

namespace ReduxMasterDetailApp.Controllers
{
    [Authorize]
    [RoutePrefix("/api/People")]
    public class PeopleController : ApiController
    {
        private static List<Person> PeopleSource { get; } = Enumerable.Range(1, 10000)
            .Select(x => new Person
            {
                Id = x,
                Name = $"okazuki {x}",
                Age = 30 + x % 20
            })
            .ToList();

        public IHttpActionResult Get(int pageSize, int skip)
        {
            return Ok(PeopleSource.Skip(skip).Take(pageSize));
        }

        public IHttpActionResult Get(int id)
        {
            var result = PeopleSource.FirstOrDefault(x => x.Id == id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [Route("Count")]
        public IHttpActionResult Count()
        {
            return Ok(PeopleSource.Count);
        }

        public IHttpActionResult Post([FromBody]Person p)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest();
            }

            p.Id = PeopleSource.Max(x => x.Id) + 1;
            PeopleSource.Add(p);
            return Ok(p);
        }

        public IHttpActionResult Put(int id, [FromBody]Person p)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest();
            }

            var target = PeopleSource.Single(x => x.Id == id);
            target.Name = p.Name;
            target.Age = p.Age;

            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            var target = PeopleSource.SingleOrDefault(x => x.Id == id);
            if (target == null)
            {
                return NotFound();
            }
            PeopleSource.Remove(target);
            return Ok();
        }
    }

    public class Person
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Age { get; set; }
    }
}
