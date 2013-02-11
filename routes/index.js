var User = require("./../models/User.js");
var Workout = require("./../models/Workout.js");

exports.index = function(request, response){
    response.render('index', { layout: 'layout' });
};

exports.about = function(request, response){
    response.render('about', { layout: 'layout' });
};

exports.contact =  function(request, response) {
    response.render("contact.ejs", { layout: "layout"});
};

exports.register = function(request, response) {
    response.render("register.ejs", { layout: "layout" });
};

exports.overview = function(request, response) {
    response.render("members/overview.ejs", { layout: "layout"});
};

exports.login = function(request, response) {
    response.render("login.ejs", { layout: "layout", error: ""});
};

exports.account_created = function(request, response) {
    response.render("success.ejs", { layout: "layout"});
};

exports.track = function(request, response) {
    response.render("members/track.ejs", { layout: "layout"});
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

exports.userLogin = function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    User.userLogin(username, password, function(user) {
        if(user.length !== 0) {
            request.session.username = username;
            request.session.userLoggedIn = true;
            response.redirect("/overview");
        } else {
            response.render("login.ejs", { layout: "layout", error: "Invalid Username or Password"});
        }
    });
};

exports.checkUser = function(request, response) {
    var username = request.body.user;
    var isUserFound = false;

    User.getUser(username, function(user) {
        if(user !== undefined && user !== null) {
            isUserFound = true;
        } else {
            isUserFound = false;
        }
        response.json({ userExists: isUserFound});
    });
};

exports.checkEmail = function (request, response) {
    var email = request.body.email;
    var isEmailFound = false;

    User.getUserByEmail(email, function(email_address) {
        if(email_address !== undefined && email_address !== null) {
            isEmailFound = true;
        } else {
            isEmailFound = false;
        }
        response.json({ emailExists: isEmailFound});
    });
};

exports.logWorkout = function (request, response) {
    var workout_name = request.body.workout_name;
    var day = request.body.day;
    var reps = request.body.reps;
    var sets = request.body.sets;
    var weight = request.body.weight;
    var username = request.session.username;
    
    Workout.addWorkout(username, workout_name, day, reps, sets, weight, function(err, workout) {
        if (err) throw err;
        response.render("track.ejs");
    });
};