using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Web.Services;
using System.Xml;


public partial class _Default : System.Web.UI.Page
{
    public DBConnection connection { get; set; }

    

    protected void Page_Load(object sender, EventArgs e)
    {
       this.connection = new DBConnection();
    }

    [WebMethod]
    public string get_users(int provider_id) {
        return this.connection.get_markers(provider_id);
    }
}