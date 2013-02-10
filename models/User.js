var db = require("../lib/db");

var UserSchema = new db.Schema({
	username: {type:String, unique: true},
  firstname: String,
  lastname: String,
  email: {type:String, unique: true},
  date_created: Date,
  password: String,
  height_feet: Number,
  height_inches: Number,
  weight: Number,
  twitter_id: String
});

var User = db.mongoose.model("User", UserSchema);

module.exports.addUser = addUser;
module.exports.getUser = getUser;
module.exports.getUserByEmail = getUserByEmail;
module.exports.checkIfUserExists = checkIfUserExists;
module.exports.userLogin = userLogin;

function addUser(email, firstname, lastname, weight, height_feet, height_inches, twitter_id, username, password, callback) {
	var instance = new User();
	instance.username = username;
	instance.firstname = firstname;
	instance.lastname = lastname;
    instance.height_feet = height_feet;
    instance.height_inches = height_inches;
    instance.weight = weight;
    instance.twitter_id = twitter_id;
	instance.email = email;
	instance.password = password;
	instance.date_created = Date.now();
	instance.save(function (err) {
		if (err) {
			callback(err);
		} else {
			callback(null, instance);
		}
	});
}

function userLogin(username, password, callback) {
    User.find({username: username, password: password}, function (err, person) {
        if(err) {
            console.log("Error:", err);
        } else {
            callback(person);
        }
    });
}

function getUser(username, callback) {
    User.find({username: username}, function (err, person) {
        if(err) {
            console.log("Error:", err);
        } else {
            callback(person);
        }
    });
}

function getUserByEmail(email, callback) {
    User.find({email: email}, function (err, person) {
        if(err) {
            console.log("Error:", err);
        } else {
            callback(person);
        }
    });
}


function checkIfUserExists(username) {

}

