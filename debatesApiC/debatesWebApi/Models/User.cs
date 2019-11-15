using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace debatesWebApi.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public String Name { get; set; }
        public String SecondName { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
        public String Rol { get; set; }
    }
}