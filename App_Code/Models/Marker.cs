﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Marker
/// </summary>
public class Marker
{
    public int ID { get; set; }

    public int ProviderID { get; set; }

    public string EventName { get; set; }

    public string Description { get; set; }

    public string Date { get; set; }

    public float Latitude { get; set; }

    public float Longitude { get; set; }
}