namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class alterrate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Rating",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AutorId = c.Int(nullable: false),
                        DebateId = c.Int(nullable: false),
                        CommentId = c.Int(nullable: false),
                        Rate = c.Short(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            DropTable("dbo.Qualification");
        }
        
        public override void Down()
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
            
            DropTable("dbo.Rating");
        }
    }
}
