using Newtonsoft.Json;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DBConnection
/// </summary>
public class DBConnection
{


    public DBConnection()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public string get_markers(int provider_id) {
        using (var db = new PetaPoco.Database("linkSTEM"))
        {
            var SQL = Sql.Builder.Append("SELECT * ")
            .Append("FROM [linkSTEM].[dbo].[marker]")
            .Append("WHERE [provider_id] = @0", provider_id);
            return JsonConvert.SerializeObject(db.Fetch<Marker>(SQL));
        }

}