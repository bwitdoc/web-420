var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

var User = mongoose.model('User', userSchema); 
module.exports = User;

// Database queries
module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};