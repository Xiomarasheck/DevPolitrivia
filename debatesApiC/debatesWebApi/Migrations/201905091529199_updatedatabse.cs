namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatedatabse : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.User", "UserName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "UserName", c => c.String());
        }
    }
}
