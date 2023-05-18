const express = require('express');
// const user = require('./models/user');
require('./db');
var { expressjwt: jwt } = require("express-jwt");
const jwks = require('jwks-rsa');
// const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 4000;
app.use(express.json());

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const verifyJWT = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-3kdbhzzujbs1kvgj.us.auth0.com/.well-known/jwks.json',
    }),
    audience: 'aarya',
    issuer: 'https://dev-3kdbhzzujbs1kvgj.us.auth0.com/',
    algorithms: ['RS256'],
}).unless({ path: ['/'] });

app.use(verifyJWT);
app.use(express.static('public'));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello aarya!');
});

app.use('/api', require('./router/auth'));

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
