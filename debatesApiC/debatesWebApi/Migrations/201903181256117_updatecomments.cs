namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatecomments : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Comments", "AutorId", c => c.Int(nullable: false));
            DropColumn("dbo.Comments", "Autor");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Comments", "Autor", c => c.Int(nullable: false));
            DropColumn("dbo.Comments", "AutorId");
        }
    }
}
