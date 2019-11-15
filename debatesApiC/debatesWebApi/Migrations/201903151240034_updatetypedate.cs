namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatetypedate : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Debates", "FechaPublicacion");
            DropColumn("dbo.Debates", "FechaVencimiento");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Debates", "FechaVencimiento", c => c.DateTime(nullable: false));
            AddColumn("dbo.Debates", "FechaPublicacion", c => c.DateTime(nullable: false));
        }
    }
}
