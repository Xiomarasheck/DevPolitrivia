namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatetypedate2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Debates", "FechaPublicacion", c => c.DateTime(nullable: false));
            AddColumn("dbo.Debates", "FechaVencimiento", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Debates", "FechaVencimiento");
            DropColumn("dbo.Debates", "FechaPublicacion");
        }
    }
}
