namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatedate3 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Debates", "FechaPublicacion", c => c.DateTime(precision: 7, storeType: "datetime2"));
            AlterColumn("dbo.Debates", "FechaVencimiento", c => c.DateTime(precision: 7, storeType: "datetime2"));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Debates", "FechaVencimiento", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
            AlterColumn("dbo.Debates", "FechaPublicacion", c => c.DateTime(nullable: false, precision: 7, storeType: "datetime2"));
        }
    }
}
