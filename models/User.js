var db = require("../lib/db");

var UserSchema = new db.Schema({
	username: {type:String, unique: true}
  , firstname: {type:String, unique: true}
  , lastname: {type:String, unique: true}
  , email: {type:String, unique: true}
  , date_created: Date
  , password: String
  , height_feet: String
  , height_inches: String
  , weight: String
  , twitter_id: String
});

var newUser = db.mongoose.model("User", UserSchema);

module.exports.addUser = addUser;

function addUser(email, firstname, lastname, weight, height_feet, height_inches, twitter_id, username, password, callback) {
	var instance = new newUser();
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
