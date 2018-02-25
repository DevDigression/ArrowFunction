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
    public string addMarker(Marker marker)
    {
        return "";
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
}