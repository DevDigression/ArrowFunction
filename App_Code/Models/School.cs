using System;
using System.Collections.Generic;

/// <summary>
/// School Model
/// </summary>
public class School
{
    public int ID { get; set; }

    public string Name { get; set; }

    public string Username { get; set; }

    public string Password { get; set; }

    public List<Professional> Professionals { get; set; }
}
