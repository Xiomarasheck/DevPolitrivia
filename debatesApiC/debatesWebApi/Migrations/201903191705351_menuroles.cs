namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class menuroles : DbMigration
    {
        public override void Up()
        {
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MenuRoles");
        }
    }
}
