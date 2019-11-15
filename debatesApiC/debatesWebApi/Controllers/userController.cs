using debatesWebApi.Context;
using debatesWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Net.Http.Headers;

namespace debatesWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]



    public class userController : ApiController
    {
        DataStore db = new DataStore();
        // GET api/user
        public User GetLogin([FromUri]User logincredentials)
        {
            var query = from a in db.Users
                       where a.Email == logincredentials.Email
                       select a;
            User user;
            if (query.Count() == 0)
            {
                user= null;
            }
            else
            {
                user = query.First();
                if (user.Password != logincredentials.Password)
                {
                    user = null; 
                }
            }
            return user;
        }

        public MenuRoles getRolMenu(string rol)
        {
            var query = from a in db.Menu
                        where a.Rol.ToUpper() == rol.ToUpper()
                        select a;
            return query.First();
        }

        public void GetSetup()
        {
            var query = from a in db.Users
                        select a;
            if (query.Count() == 0)
            {
                User user = new User();
                user.Name = "Admin";
                user.SecondName = "Usuarios";
                user.Email = "admin@debate";
                user.Password = "Admin123*";
                user.Rol = "Admin";
                db.Users.Add(user);
                db.SaveChanges();
            }

            var query2 = from a in db.Menu
                         select a;
            if (query2.Count() == 0)
            {
                MenuRoles userAdmin = new MenuRoles("Admin");
                db.Menu.Add(userAdmin);
                MenuRoles userStudent = new MenuRoles("Student");
                db.Menu.Add(userStudent);
                MenuRoles userPrelector = new MenuRoles("Prelector");
                db.Menu.Add(userPrelector);
                db.SaveChanges();
            }
        }
     
        // POST api/user
        public void Post([FromBody]User usuario)
        {
            db.Users.Add(usuario);
            db.SaveChanges();
        }


        // PUT api/user
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/user
        public Response Delete(int id,string password)
        {
            Response answer = new Response();
            try
            {
                var pass = (from a in db.Users
                           where a.Id == id
                           select a.Password).First();
                if (pass == password)
                {
                    User usuario =  db.Users.Find(id);
                    db.Users.Remove(usuario);                 
                    var debates = (from a in db.Debates
                                  where a.Autor == id
                                  select a).ToList();
                    foreach (var debate in debates)
                    {
                        db.Debates.Remove(debate);
                    }
                    var comments = (from a in db.Comments
                                   where a.AutorId == id
                                   select a).ToList();
                    foreach (var comment in comments)
                    {
                        db.Comments.Remove(comment);
                    }
                    db.SaveChanges();
                    answer.State = 0;
                    answer.Message = "usuario borrado correctamente";
                }
                else
                {
                    answer.Message = "Contraseña incorrecta";
                }
            }
            catch (Exception ex)
            {
                answer.Message = ex.Message;
                return answer;
            }
            return answer;
        }
    }
}
