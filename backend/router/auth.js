const express = require('express');
const messanger = require('../models/user');
const jwks = require('jwks-rsa');
const axios = require('axios');
const { verify } = require('jsonwebtoken');
const router = express.Router();
const verifyJWT = require('../middleware/jwtauth')

router.post('/login', async (req, res) => {
    try {


        const accessedToken = req.headers.authorization.split(' ')[1];
        console.log(accessedToken);
        const response = await axios.get('https://dev-3kdbhzzujbs1kvgj.us.auth0.com/userinfo', {
            headers:
            {
                Authorization: `Bearer ${accessedToken}`,
            }
        });

        const userData = response.data;
        console.log(userData);


    } catch (error) {
        console.log(error);
    }
});

router.post('/storeuser',verifyJWT, async (req, res) => {
    try {
        const { username, email, sub, picture, nickname } = req.body;

        // Create a new user document in MongoDB
        const newUser = new messanger({
            username,
            email,
            sub,
            picture,
            nickname
        });

        await newUser.save();
        console.log(messanger.data);
        console.log('New user data stored in MongoDB:', newUser);
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


router.get('/api/userdata', async (req, res) => {
    try {
        const { username } = req.user;

        // Retrieve the user data from the database based on the username
        const user = await messanger.findOne({ username });

        if (user) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


module.exports = router;