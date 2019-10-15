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
    public class CommentController : ApiController
    {
        DataStore db = new DataStore();
        // GET: api/Comment
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Comment/5
        public IEnumerable<Object> GetComment(int id)
        {
               var comments = from a in db.Comments
                              join b in db.Users on a.AutorId equals b.Id
                              where a.IdDebate == id
                              select new
                              {
                                  Id = a.Id,
                                  IdDebate = a.IdDebate,
                                  Descripcion = a.Descripcion,
                                  AutordId =a.Descripcion,
                                  FechaPublicacion = a.FechaPublicacion,
                                  AutorName = b.Name+" "+b.SecondName,
                                  Rate = (from d in db.Ratings where d.DebateId == id && d.CommentId == a.Id select d.Rate).FirstOrDefault(),
                                  RatingCount = (from d in db.Ratings where d.DebateId == id && d.CommentId == a.Id select d).Count()
                                  //Average = (from d in db.Ratings where d.DebateId == id && d.CommentId == a.Id select d.Rate).Sum() /
                                  //(from d in db.Ratings where d.DebateId == id && d.CommentId == a.Id select d).Count()
                              };
            return comments.ToList();
        }

        // POST: api/Comment
        public Response Post([FromBody]Comments comment)
        {
            Response answer = new Response();
            try
            {
                comment.FechaPublicacion = DateTime.Now;
                db.Comments.Add(comment);
                db.SaveChanges();
                answer.State = 0;
                answer.Message = "Comentario subido Exitosamente";
            }
            catch (Exception ex)
            {
                answer.Message = ex.Message;
                return answer;
            }
            return answer;
        }

        // PUT: api/Comment/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Comment/5
        public void Delete(int id)
        {
        }
    }
}
