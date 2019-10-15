namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MigracionBaseDeDatos : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdDebate = c.Int(nullable: false),
                        Descripcion = c.String(),
                        AutorId = c.Int(nullable: false),
                        FechaPublicacion = c.DateTime(precision: 7, storeType: "datetime2"),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Debates",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Titulo = c.String(),
                        Tema = c.String(),
                        Autor = c.Int(nullable: false),
                        Estado = c.Boolean(nullable: false),
                        FechaPublicacion = c.DateTime(precision: 7, storeType: "datetime2"),
                        FechaVencimiento = c.DateTime(precision: 7, storeType: "datetime2"),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.Autor, cascadeDelete: true)
                .Index(t => t.Autor);
            
            CreateTable(
                "dbo.MenuRoles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Rol = c.String(),
                        CreateDebate = c.Boolean(nullable: false),
                        Report = c.Boolean(nullable: false),
                        Scroll = c.Boolean(nullable: false),
                        UserInfo = c.Boolean(nullable: false),
                        RegisterUser = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Rating",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AutorId = c.Int(nullable: false),
                        DebateId = c.Int(nullable: false),
                        CommentId = c.Int(nullable: false),
                        Rate = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.User", "Email", c => c.String());
            AddColumn("dbo.User", "Password", c => c.String());
            AlterColumn("dbo.User", "Rol", c => c.String());
            DropColumn("dbo.User", "TagName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "TagName", c => c.String());
            DropForeignKey("dbo.Debates", "Autor", "dbo.User");
            DropIndex("dbo.Debates", new[] { "Autor" });
            AlterColumn("dbo.User", "Rol", c => c.Int(nullable: false));
            DropColumn("dbo.User", "Password");
            DropColumn("dbo.User", "Email");
            DropTable("dbo.Rating");
            DropTable("dbo.MenuRoles");
            DropTable("dbo.Debates");
            DropTable("dbo.Comments");
        }
    }
}
