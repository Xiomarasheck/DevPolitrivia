namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateuser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "Password", c => c.String());
            DropColumn("dbo.User", "TagName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "TagName", c => c.String());
            DropColumn("dbo.User", "Password");
        }
    }
}
