
/**
 * Module dependencies.
 */

var express = require("express")
  , routes = require("./routes")
  , user = require("./routes/user")
  , http = require("http")
  , expressLayouts = require("express-ejs-layouts")
  , fs = require("fs")
  , User = require("./models/User.js")
  , path = require("path");

var app = express();

app.configure(function(){
    app.set("port", process.env.PORT || 3000);
    app.set("views", __dirname + "/views");
    app.set("view engine", "ejs");
    app.set("layout", "layout"); // Setting default layout
    app.use(expressLayouts);
    app.use("/libraries", express.static(__dirname + "/libraries"));
    app.use(express.favicon());
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname, "public"));
});

app.configure("development", function(){
  app.use(express.errorHandler());
});

app.get("/", routes.index);
app.get("/users", user.list);
app.get("/register", function(request, response) {
    response.render("register.ejs", { layout: "layout"});
});
app.get("/login", function(request, response) {
    response.render("login.ejs", { layout: "layout"});
});
app.post("/signup", function(request, response) {
    var email = request.body.email;
    var firstname = request.body.firstname;
    var lastname = request.body.lastname;
    var height = request.body.height;
    var weight = request.body.weight;
    var username = request.body.username;
    var password = request.body.password;
    var confirmPassword = request.body.confirmPassword;
    
    // Verify if legit first

    User.addUser(email, firstname, lastname, username, password, function(err, user) {
        if (err) throw err;
        response.redirect("/register");
    });
});

http.createServer(app).listen(app.get("port"), function(){
    console.log("Express server listening on port " + app.get("port"));
});
