using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Web.Services;
using System.Xml;


public partial class _Default : System.Web.UI.Page
{
    [WebMethod]
    public string addNewSchool(School school)
    {
        return "";
    }

    [WebMethod]
    public string getSchool(string username)
    {
        return "";
    }

    protected void Page_Load(object sender, EventArgs e)
    {

    }
}