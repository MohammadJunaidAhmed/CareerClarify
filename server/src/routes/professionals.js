const express = require('express')
const router = express.Router();
const { Professional } = require('../models/Professional/professional');

router.get('/', async(req,res)=>{
    res.send("Hello");
})

router.post('/register', async(req, res)=>{
    let professional = new Professional({
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.password,
        phone: req.body.phone,
        field: req.body.field
    });
    professional = await professional.save();
    if(!professional){
        return res.status(400).send('the user cannot be created!')
    }
    res.send(user)
})

module.exports =router;