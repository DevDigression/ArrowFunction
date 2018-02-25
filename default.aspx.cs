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

    public DBProvider dbProvider { get; set; }

    protected void Page_Load(object sender, EventArgs e)
    {
        this.dbProvider = new DBProvider();
    }

    [WebMethod]
    public string getAllMarkers() {
        return this.dbProvider.getAllMarkers();
    }

    [WebMethod]
    public bool deleteMarker(Marker marker)
    {
        return this.dbProvider.deleteMarker(marker);
    }

    [WebMethod]
    public bool addMarker(Marker marker)
    {
        return this.dbProvider.addMarker(marker);
    }

    [WebMethod]
    public bool addProvider(Provider provider)
    {
        return this.dbProvider.addProvider(provider);        
    }

    [WebMethod]
    public string getProvider(string username, string password)
    {
        return this.dbProvider.getProvider(username, password);
    }

    [WebMethod]
    public string getProviderMarkers(int providerID)
    {
        return this.getProviderMarkers(providerID);
    }
}