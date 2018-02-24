using System;
using System.Collections.Generic;

/// <summary>
/// School Model
/// </summary>
public class Provider
{
    public int ID { get; set; }

    public string ProviderName { get; set; }

    public string Username { get; set; }

    public string Password { get; set; }

    public List<Marker> Markers { get; set; }

}
