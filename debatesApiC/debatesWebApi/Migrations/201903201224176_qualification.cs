namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class qualification : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Qualification",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AutorId = c.Int(nullable: false),
                        DebateId = c.Int(nullable: false),
                        CommentId = c.Int(nullable: false),
                        Note = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Qualification");
        }
    }
}
