namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class debatesalter : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Debates", "Comentarios_Id", "dbo.Debates");
            DropIndex("dbo.Debates", new[] { "Comentarios_Id" });
            DropColumn("dbo.Debates", "Comentarios_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Debates", "Comentarios_Id", c => c.Int());
            CreateIndex("dbo.Debates", "Comentarios_Id");
            AddForeignKey("dbo.Debates", "Comentarios_Id", "dbo.Debates", "Id");
        }
    }
}
