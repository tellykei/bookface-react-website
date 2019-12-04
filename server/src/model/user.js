const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    firstName: String,
    lastName: String,

    emailAddress: String,
    passwordDigest: String
    
});

const User = mongoose.model('user', userSchema);

module.exports = User;