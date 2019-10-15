using debatesWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace debatesWebApi.Context
{
    public class DataStore:DbContext
    {
        public DataStore() : base("DataStore") { }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Properties<DateTime>()
           .Configure(c => c.HasColumnType("datetime2"));
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Debates> Debates { get; set;}
        public DbSet<Comments> Comments { get; set;}
        public DbSet<MenuRoles> Menu { get; set;}
        public DbSet<Rating> Ratings { get; set;}
    }
}