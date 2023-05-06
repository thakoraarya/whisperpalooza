const express = require('express');
const user = require('./models/user');
require('./db');

const dotenv = require('dotenv');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const { auth } = require('express-openid-connect');

// // const jwt = require('express-jwt');
// const jwksRsa = require('jwks-rsa');
// const JWT = require('jsonwebtoken');
// console.log(JWT);

dotenv.config();


const app = express()
const port = 3000
app.use(express.json())


// const authConfig = {
//     domain: process.env.DOMAIN,
//     audience: process.env.CLIENT_ID
// };

const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.get('/', (req, res) => {
    res.send('Hello aarya!')
});

// app.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
//   });


try {
    app.get('/api/private', (req, res) => {
        res.json({
            message: 'You have accessed a private endpoint!'
        });
    });
} catch (e) {
    console.log(e);
}




app.use('/api', require('./router/auth'));

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
