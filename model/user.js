const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usersDB');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    email: String,
    password:String,
    verified:Boolean
});


const UserModel = mongoose.model("user", UserSchema)


module.exports = UserModel