const express = require('express');
const messanger = require('../models/user');

const router = express.Router();



try {
    router.get('/private', (req, res) => {
        res.json({
            message: 'You have accessed a private endpoint!'
        });
    });
} catch (e) {
    console.log(e);
}







// get single user
router.get('/singleuser', async (req, res) => {
    const Messanger = await messanger.find({}, {name:1 ,email:1, _id: 0});
    res.send(Messanger)
})

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


//add new user
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


module.exports = router;