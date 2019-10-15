using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace debatesWebApi.Models
{
    public class Rating
    {
        [Key]
        public int Id { get; set; }
        public int AutorId { get; set; }
        public int DebateId { get; set; }
        public int CommentId { get; set; }
        public int Rate { get; set; }
    }
}