namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class debatesupdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Debates", "comentarios_Id", c => c.Int());
            CreateIndex("dbo.Debates", "comentarios_Id");
            AddForeignKey("dbo.Debates", "comentarios_Id", "dbo.Debates", "Id");
            DropColumn("dbo.Debates", "Calificacion");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Debates", "Calificacion", c => c.Int(nullable: false));
            DropForeignKey("dbo.Debates", "comentarios_Id", "dbo.Debates");
            DropIndex("dbo.Debates", new[] { "comentarios_Id" });
            DropColumn("dbo.Debates", "comentarios_Id");
        }
    }
}
