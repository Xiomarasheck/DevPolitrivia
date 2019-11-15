namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class debates : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Debates",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Titulo = c.String(),
                        Tema = c.String(),
                        Calificacion = c.Int(nullable: false),
                        Autor = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.Autor, cascadeDelete: true)
                .Index(t => t.Autor);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Debates", "Autor", "dbo.User");
            DropIndex("dbo.Debates", new[] { "Autor" });
            DropTable("dbo.Debates");
        }
    }
}
