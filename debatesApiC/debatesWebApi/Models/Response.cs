using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace debatesWebApi.Models
{
    public class Response
    {
        public int State { get; set; }
        public String Message { get; set; }
        public Response()
        {
            this.State = 1;
            this.Message = "undefined";
        }
    }
}