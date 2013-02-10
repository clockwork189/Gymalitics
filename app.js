
/**
 * Module dependencies.
 */

var express = require("express"),
    routes = require("./routes"),
    user = require("./routes/user"),
    http = require("http"),
    expressLayouts = require("express-ejs-layouts"),
    fs = require("fs"),
    User = require("./models/User.js"),
    path = require("path");

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
    app.use(express.cookieParser('spiderman'));
    app.use(express.cookieSession());
    app.use(express.session());
    app.use(function(req, res, next){
        res.locals.session = req.session;
        next();
    });
    app.use(app.router);
    app.use(express.static(__dirname, "public"));
});

app.configure("development", function(){
  app.use(express.errorHandler());
});

app.get("/", routes.index);
app.get("/about",routes.about);
app.get("/contact", routes.contact);
app.get("/register", routes.register);
app.get("/overview", routes.overview);
app.get("/login", routes.login);
app.get("/account_created", routes.account_created);
app.get("/user_login", routes.login);
app.get("/track", routes.track);
app.post("/signup", routes.signup);
app.post("/user_login", routes.userLogin);
app.post("/checkuser", routes.checkUser);
app.post("/checkemail", routes.checkEmail);
app.post("/log_workout", routes.logWorkout);

http.createServer(app).listen(app.get("port"), function(){
    console.log("Express server listening on port " + app.get("port"));
});
