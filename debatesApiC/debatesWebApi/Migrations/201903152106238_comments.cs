namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class comments : DbMigration
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
                        Autor = c.Int(nullable: false),
                        FechaPublicacion = c.DateTime(precision: 7, storeType: "datetime2"),
                    })
                .PrimaryKey(t => t.Id);         
        }
        
        public override void Down()
        {
            DropTable("dbo.Comments");
        }
    }
}
