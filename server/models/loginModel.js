const mongoose = require('mongoose')

const Schema = mongoose.Schema;
// sets a schema for the 'userInfo' collection
const userSchema = new Schema({
  username: String,
  password: String,
  fullName: String
});

// creates a model for the 'user' collection that will be part of the export
const User = mongoose.model('user', userSchema);


// exports all the models in an object to be used in the controller
module.exports = User;
