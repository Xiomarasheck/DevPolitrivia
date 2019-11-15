namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class rol : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.User", "Rol", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.User", "Rol", c => c.Int(nullable: false));
        }
    }
}
