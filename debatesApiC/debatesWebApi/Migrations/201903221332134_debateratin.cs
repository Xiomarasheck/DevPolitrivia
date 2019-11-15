namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class debateratin : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Rating", "Rate", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Rating", "Rate", c => c.Short(nullable: false));
        }
    }
}
