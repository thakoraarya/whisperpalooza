const express = require('express');
require('./db');
require('./router/auth')
const verifyJWT = require('./middleware/jwtauth')
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



app.use(verifyJWT);
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello aarya!');
});


app.use('/api', require('./router/auth'));

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
