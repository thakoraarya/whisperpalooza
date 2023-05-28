var { expressjwt: jwt } = require("express-jwt");


const verifyJWT = jwt({
    secret: 'aarya',
    audience: 'aarya',
    issuer: 'https://dev-3kdbhzzujbs1kvgj.us.auth0.com/',
    algorithms: ['RS256'],
}).unless({ path: ['/*'] });


module.exports = verifyJWT;
