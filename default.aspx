<%@ Page Language="C#" AutoEventWireup="true" CodeFile="default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta charset="utf-8" />
    <title>LinkedSTEM</title>  
    <link rel="stylesheet" href="Public/stylesheets/font-awesome.min.css"/>
    <link rel="stylesheet" href="Public/stylesheets/bootstrap.min.css" />
    <link rel="stylesheet" href="Public/stylesheets/styles.css" />
</head>
<body data-ng-app="LinkSTEM">
    
    <div class="ng-view"></div>
    <!-- scripts -->

    <!-- lib -->
    <script src="Public/js/lib/jquery-3.0.0.js"></script>
    <script src="Public/js/lib/bootstrap.min.js"></script>
    <script src="Public/js/lib/angular.js"></script>

    <!-- app -->
    <script src="Public/js/app.js"></script>

    <!-- services -->
    <script src="Public/js/services/dataService.js"></script>

    <!-- controllers -->
    <script src="Public/js/controllers/loginCTRL.js"></script>
    <script src="Public/js/controllers/contactCTRL.js"></script>
</body>
</html>
