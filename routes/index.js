var User = require("./../models/User.js");

exports.index = function(request, response){
    response.render('index', { title: 'Express' });
};

exports.about = function(request, response){
    response.render('about', { layout: 'layout' });
};

exports.contact =  function(request, response) {
    response.render("contact.ejs", { layout: "layout"});
};

exports.register = function(request, response) {
    response.render("register.ejs", { layout: "layout"});
};

exports.overview = function(request, response) {
    response.render("overview.ejs", { layout: "layout"});
};

exports.login = function(request, response) {
    response.render("login.ejs", { layout: "layout"});
};

exports.account_created = function(request, response) {
    response.render("success.ejs", { layout: "layout"});
};

exports.signup = function(request, response) {
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
        response.redirect("/account_created");
    });
};