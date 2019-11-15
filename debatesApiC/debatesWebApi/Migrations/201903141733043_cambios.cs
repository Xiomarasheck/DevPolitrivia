namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class cambios : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Debates", new[] { "comentarios_Id" });
            AddColumn("dbo.Debates", "Estado", c => c.Boolean(nullable: false));
            AddColumn("dbo.Debates", "FechaPublicacion", c => c.DateTime(nullable: false));
            AddColumn("dbo.Debates", "FechaVencimiento", c => c.DateTime(nullable: false));
            CreateIndex("dbo.Debates", "Comentarios_Id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Debates", new[] { "Comentarios_Id" });
            DropColumn("dbo.Debates", "FechaVencimiento");
            DropColumn("dbo.Debates", "FechaPublicacion");
            DropColumn("dbo.Debates", "Estado");
            CreateIndex("dbo.Debates", "comentarios_Id");
        }
    }
}
