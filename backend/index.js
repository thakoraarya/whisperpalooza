const express = require('express');
const user = require('./models/user');
require('./db');
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).send('hola aarya')
})

app.use('/api/auth',require('./router/auth'))
// app.use('/api/chatroom',require('./router/chatroom'))



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})