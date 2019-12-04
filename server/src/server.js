const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./model/user');
const Post = require('./model/post');

mongoose.connect('mongodb://localhost:27017/bookface', {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log('Database is connected.'));

//Connect to MongoDB
const server = express();

server.use(express.json());


//endpoint for creating a user
server.post('/api/users', async (request, response) => {

    //storing email address and password from request body
    const { firstName, lastName, emailAdress, password } = request.body;

    try {
        //checking for existing user
        const existing = await User.findOne({ emailAddress: { $eq: emailAddress } });

        //if existing throw a 400
        if(existing) {
            console.log(`User with email '${emailAdress}' already exists.`);
            return response.sendStatus(400);
        }

        //hashing password salt rounds = 12
        bcrypt.hash(password, 12, async (error, hash) => {
            //something went wrong (uncommon)
            if(error) {
                console.log('An error occured during hashing: ' + error.message);

                return response.sendStatus(400);
            }

            //creating user with hash and email
            const user = await User.create({ 
                firstName,
                lastName,
                emailAddress,
                passwordDigest: hash });

            console.log('User created: ' + user.emailAddress + ' ' + user.passwordDigest);

            return response.sendStatus(200);
        });
    } catch (error) {
        console.log('Unexpected error: ' + error.message);

        return response.sendStatus(500);
    }
});

// This endpoint will be used to log in
server.post('/api/sessions', async (request, response) => {

    // Pull the login credentials from the request
    const { emailAddress, password } = request.body;

    // Find a user with the email address specified
    const user = await User.findOne({ emailAddress: { $eq: emailAddress }});

    // No user was found with that email address, don't tell the user this to mitigate user enumeration attacks, just return a 400
    if(!user) {

        console.log('No user was found with that email address: ' + emailAddress);

        return response.sendStatus(400);
    }

    // Let Bcrypt figure out if the given plaintext password equals the one saved in the database
    // Bcrypt will handle the random salt it gave the password when the user was created
    bcrypt.compare(password, user.passwordDigest, (error, result) => {

        // Not common, return a 400 if there was an error
        if(error) {

            console.error('There was an error checking the users password hash: ' + error.message);

            return response.sendStatus(400);
        }

        // Don't perform truthy logic here, check strict against a boolean
        if(result === true) {

            console.log('User successfully logged in!');
            
            return response.sendStatus(200);
        }

        console.log('User failed login, incorrect password');

        // Don't tell the user why the login failed, it just failed with a 400
        return response.sendStatus(400);
    });
});


// endpoint for creating a user post
server.post('/api/posts', async (request, response) => {
    const { userName, description } = request.body;

    try {
        const userPost = await Post.create({
            userId: userName,
            description
        });

        console.log('Post created by: ' + userPost.userId + ' Content: ' + userPost.description);

        return response.sendStatus(200);
    } catch (error) {
        console.log('Error creating post ' + error.message);

        return response.sendStatus(500);
    }
});

//endpoint for deleting a post
server.delete('/api/posts', async (request, response) => {
    const { userName, description } = request.body;
    console.log('A delete request came in to delete: ' + description);

    try {
        await Post.deleteOne({
            userId: userName,
            description
        });
    } catch (error) {
        console.log('Error deleting post ' + error.message);

        return response.sendStatus(500);
    }
});

const port = process.env.PORT || 4000;

server.listen(port), () => console.log('Server is up!');