using Newtonsoft.Json;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DBConnection
/// </summary>
public class DBProvider
{


    public DBProvider()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public string get_markers(int provider_id)
    {
        /*using (var db = new PetaPoco.Database("linkSTEM"))
        {
            var SQL = Sql.Builder.Append("SELECT * ")
            .Append("FROM [linkSTEM].[dbo].[marker]")
            .Append("WHERE [provider_id] = @0", provider_id);
            return JsonConvert.SerializeObject(db.Fetch<Marker>(SQL));
        }/**/
        Marker test_marker = new Marker();
        test_marker.Description = "Hello World";
        return JsonConvert.SerializeObject(test_marker);
    }    
    public string getAllMarkers()
    {
        using (var db = new PetaPoco.Database("linkSTEM"))
        {
            var SQL = Sql.Builder.Append("SELECT *")
                                    .Append("FROM [dbo].[Markers]");

            return JsonConvert.SerializeObject(db.Fetch<Marker>(SQL));
        }

    }

    public bool deleteMarker(Marker marker)
    {
        try
        {
            using (var db = new PetaPoco.Database("linkSTEM"))
            {
                db.Insert("Markers", "marker_ID", marker);
                return true;
            }

        }
        catch (Exception)
        {
            return false;
        }
    }
    
    public bool addMarker(Marker marker)
    {
        try
        {
            using (var db = new PetaPoco.Database("linkSTEM"))
            {
                db.Insert("Markers", "marker_ID", marker);
                return true;
            }

        }
        catch (Exception)
        {
            return false;
        }
    }

    public bool addProvider(Provider provider)
    {
        try
        {
            using (var db = new PetaPoco.Database("linkSTEM"))
            {
                db.Insert("Providers", "provider_ID", provider);
                return true;
            }

        }
        catch (Exception)
        {
            return false;
        }

    }

    public string getProvider(string username, string password)
    {
        using (var db = new PetaPoco.Database("linkSTEM"))
        {
            var SQL = Sql.Builder.Append("SELECT *")
                                 .Append("FROM [dbo].[Providers]")
                                 .Append("WHERE [provider_Username] = @0 AND [provider_Password] = @1", username, password);

            return JsonConvert.SerializeObject(db.FirstOrDefault<Provider>(SQL));
        }
    }

    public string getProviderMarkers(int providerID)
    {
        using (var db = new PetaPoco.Database("linkSTEM"))
        {
            var SQL = Sql.Builder.Append("SELECT *")
                                 .Append("FROM [dbo].[Markers]")
                                 .Append("WHERE [provider_ID] = @0", providerID);

            return JsonConvert.SerializeObject(db.Fetch<Marker>(SQL));
        }
    }
}