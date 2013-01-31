var db = require("../lib/db");

var UserSchema = new db.Schema({
	username: {type:String, unique: true}
  , firstname: {type:String, unique: true}
  , lastname: {type:String, unique: true}
  , email: {type:String, unique: true}
  , password: String
});

var newUser = db.mongoose.model("User", UserSchema);

module.exports.addUser = addUser;

function addUser(email, firstname, lastname, username, password, callback) {
	var instance = new newUser();
	instance.username = username;
	instance.firstname = firstname;
	instance.lastname = lastname;
	instance.email = email;
	instance.password = password;
	instance.save(function (err) {
		if (err) {
			callback(err);
		} else {
			callback(null, instance);
		}
	});
}
