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
using System.Net.Mail;

namespace debatesWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]



    public class userController : ApiController
    {
        DataStore db = new DataStore();
        // GET api/user
        public object GetLogin([FromUri]User logincredentials)
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
                else
                {
                    user.setPassword("");
                }
            }
            return user;
        }

        public object getCrearUsuario([FromUri]User usuario)
        {
            db.Users.Add(usuario);
            db.SaveChanges();            
            return usuario;
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

        public bool getRecovery(string email)
        {
            bool response = false;
            var query = from a in db.Users
                    where a.Email == email
                    select a;

            User user;
            if (query.Count() > 0)
            {
                user = query.First();

                string body = "<p>Estimado/a " + user.Name + ":</p><p>Ingresa al siguiente link recuperar tu contraseña:</p>"
                + "<p><a href='http://localhost:4200/Recovery/" + user.Id + "'>http://localhost:4200/Recovery/" + user.Id + "</a></p>";

                this.getEnviarEmail(user.Email, "Recuperación de contraseña", body);
                response = true;
            }

            return response;
        }

        public object getChangePassword(int id, string password)
        {
            var query = (from a in db.Users
                        where a.Id == id
                         select a).First();
            User user = query;
            
            user.Password = password;

            db.SaveChanges();

            return true;
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

        public void getEnviarEmail(string email, string asunto, string body)
        {
            MailMessage mensaje = new MailMessage();

            mensaje.To.Add(email);
            mensaje.Subject = asunto;
            mensaje.SubjectEncoding = System.Text.Encoding.UTF8;

            mensaje.Body = body;
            mensaje.BodyEncoding = System.Text.Encoding.UTF8;
            mensaje.IsBodyHtml = true;
            mensaje.From = new MailAddress("politrivia@outlook.com");

            SmtpClient cliente = new SmtpClient();

            cliente.Credentials = new System.Net.NetworkCredential("politrivia@outlook.com", "Politecnico123*");

            cliente.Port = 587;
            cliente.EnableSsl = true;
            cliente.Host = "SMTP.Office365.com";

            try
            {
                cliente.Send(mensaje);
                cliente.Dispose();
            }
            catch (SmtpException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
