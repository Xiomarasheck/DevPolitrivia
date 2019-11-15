using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace debatesWebApi.Models
{
    public class Comments
    {
        [Key]
        public int Id { get; set; }
        public int IdDebate { get; set; }
        public String Descripcion{ get; set; }
        public int AutorId { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime? FechaPublicacion { get; set; }
    }
}