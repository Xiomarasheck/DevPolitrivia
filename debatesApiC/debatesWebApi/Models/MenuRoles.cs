using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace debatesWebApi.Models
{
    public class MenuRoles
    {
        [Key]
        public int Id { get; set; }
        public String Rol { get; set; }
        public  bool CreateDebate { get; set; }
        public bool Report { get; set; }
        public bool Scroll { get; set; }
        public bool UserInfo { get; set; }
        public bool RegisterUser { get; set; }

        public MenuRoles(string rol)
        {
            this.Rol = rol;
            if (rol == "Admin")
            {
                this.RegisterUser = true;
                this.UserInfo = true;
            }
            if (rol == "Student")
            {
                this.Scroll = true;
                this.UserInfo = true;
            }
            if (rol == "Prelector")
            {
                this.CreateDebate = true;
                this.Report = true;
                this.Scroll = true;
                this.UserInfo = true;
            }
        }
        public MenuRoles()
        {

        }
    }
}