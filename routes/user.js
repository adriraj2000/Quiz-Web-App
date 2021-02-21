const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get('/', async (req, res) => {
    const users = await User.find({})
    res.send({
        message: 'All users',
        users
    })
})

router.post('/register', async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        const { id, name, email, password } = user;
        const token = jwt.sign({ id, email }, process.env.SECRET);
        return res.status(201).json({
            id, name, token, password
        });
    } catch (err) {
        if (err.code === 11000) {
            err.message = 'Sorry that username is already taken'
        }
        return next({
            status: 400,
            message: err.message,
        })
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });

        const {id,email} = user
        const valid = bcrypt.compareSync(req.body.password, user.password);
        if (valid) {
            const token = jwt.sign({ id, email }, process.env.SECRET);
            return res.status(200).json({
                id,
                email,
                token,
            });
        } else {
            throw new Error();
        }
    } catch (err) {
        return next({ status: 400, message: 'Invalid Username/Password' });
    }

})

module.exports = router



