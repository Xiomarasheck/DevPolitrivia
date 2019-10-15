using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

namespace debatesWebApi.Models
{
    public class Debates
    {
        [Key]
        public int Id { get; set; }
        public String Titulo { get; set; }
        public String Tema { get; set; }
        [ForeignKey("UserFk")]
        public int Autor { get; set; }
        public User UserFk { get; set; }
        public bool Estado { get; set;}
        [Column(TypeName = "datetime2")]
        public DateTime? FechaPublicacion { get; set;}
        [Column(TypeName = "datetime2")]
        public DateTime? FechaVencimiento { get; set; }
    }
}