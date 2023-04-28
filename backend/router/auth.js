const express = require('express');
const messanger = require('../models/user');

const router = express.Router();

router.get('/allusers', (req, res) => {
    res.send(user)
})





router.post('/newuser', async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await messanger.findOne({ email, name });
    if (existingUser) {
        return res.status(409).send({ message: 'User already exists' });
    }

    const user = new messanger({
        name,
        email,
        password
    });

    user.save()
        .then(() => {
            console.log(user);
            res.send({ message: `welcome ${user.name}` });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ message: 'Error creating user' });
        });
});

// delete user
router.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    messanger.findByIdAndDelete(id)
        .then((result) => {
            res.send({ message: 'User deleted', result });
        })
        .catch((err) => {
            console.log(err);
        });
});

// get all users
router.get('/allusers', (req, res) => {
    messanger.findall()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});




module.exports = router;