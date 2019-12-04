const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    userId: mongoose.Schema.Types.ObjectId,

    description: String

});

const Post = mongoose.model('post', postSchema);

module.exports = Post;