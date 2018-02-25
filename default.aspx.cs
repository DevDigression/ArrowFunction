using Newtonsoft.Json;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Web.Services;
using System.Xml;


public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }

    [WebMethod]
    public static string getAllMarkers() {
        using (var db = new PetaPoco.Database("linkSTEM"))
        {
            var SQL = Sql.Builder.Append("SELECT *")
                                    .Append("FROM [dbo].[Markers]");

            return JsonConvert.SerializeObject(db.Fetch<Marker>(SQL));
        }

    }

    [WebMethod]
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

    [WebMethod]
    public bool addProvider(Provider provider)
    {
        try
        {
            using (var db = new PetaPoco.Database("linkSTEM"))
            {
                db.Insert("Providers", "provider_ID", provider);
                return true;
            }

        } catch (Exception)
        {
            return false;
        }
        
    }

    [WebMethod]
    public static string getProvider(string username, string password)
    {
        using (var db = new PetaPoco.Database("linkSTEM"))
        {
            var SQL = Sql.Builder.Append("SELECT *")
                                 .Append("FROM [dbo].[Providers]")
                                 .Append("WHERE [provider_Username] = @0 AND [provider_Password] = @1", username, password);

            return JsonConvert.SerializeObject(db.FirstOrDefault<Provider>(SQL));
        }
    }

    [WebMethod]
    public static string getProviderMarkers(int providerID)
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