using debatesWebApi.Context;
using debatesWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace debatesWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RatingController : ApiController
    {
        DataStore db = new DataStore();
        // GET: api/Rating
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Rating/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Rating
        public void Post([FromBody]Rating qualification)
        {
            var query = from a in db.Ratings
                        where a.DebateId == qualification.DebateId && a.CommentId == 0 && a.AutorId == qualification.AutorId
                        select a;
            if (query.Count() == 0)
            {
               db.Ratings.Add(qualification);
            }
            else
            {
                Rating updateRating;
                if (qualification.CommentId == 0)
                {
                    updateRating = query.First();
                    qualification.Id = updateRating.Id;
                    db.Entry(updateRating).CurrentValues.SetValues(qualification);
                }
                else
                {
                   var querycomment = from a in db.Ratings
                                   where a.DebateId == qualification.DebateId && a.CommentId == qualification.CommentId && a.AutorId == qualification.AutorId
                                      select a;
                    if (querycomment.Count() == 0)
                    {
                        db.Ratings.Add(qualification);
                    }
                    else
                    {
                        updateRating = querycomment.First();
                        qualification.Id = updateRating.Id;
                        db.Entry(updateRating).CurrentValues.SetValues(qualification);
                    }
                }            
            }
            db.SaveChanges();
        }

        // PUT: api/Rating/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Rating/5
        public void Delete(int id)
        {
        }
    }
}
