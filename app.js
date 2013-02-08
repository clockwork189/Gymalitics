
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
app.get("/about", function(request, response) {
    response.render("about.ejs", { layout: "layout"});
});
app.get("/contact", function(request, response) {
    response.render("contact.ejs", { layout: "layout"});
});
app.get("/register", function(request, response) {
    response.render("register.ejs", { layout: "layout"});
});
app.get("/overview", function(request, response) {
    response.render("overview.ejs", { layout: "layout"});
});
app.get("/login", function(request, response) {
    response.render("login.ejs", { layout: "layout"});
});
app.post("/signup", function(request, response) {
    var email = request.body.email;
    var firstname = request.body.firstname;
    var lastname = request.body.lastname;
    var weight = request.body.weight;
    var height_feet = request.body.height_feet;
    var height_inches = request.body.height_inches;
    var twitter_id = request.body.twitter_id;
    var username = request.body.username;
    var password = request.body.password;
    var confirmPassword = request.body.confirmPassword;

    User.addUser(email, firstname, lastname, weight, height_feet, height_inches, twitter_id, username, password, function(err, user) {
        if (err) throw err;
        response.redirect("/overview");
    });
});

http.createServer(app).listen(app.get("port"), function(){
    console.log("Express server listening on port " + app.get("port"));
});
