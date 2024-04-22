const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/Users/User');

router.get('/', async(req,res)=>{
    try{
        const usersList = await User.find().select('-passwordHash');
        if(!usersList){
            res.status(500).json({success:false})
        }
        res.send(usersList);
    }
    catch(err){
        res.status(500).json({error: err});
    }
});

router.post('/login', async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        const secret = process.env.SECRET;
        if(!user){
            return res.status(404).send('User not found')
        }
        if(user && bcrypt.compareSync(req.body.password,user.passwordHash)){
            const token = jwt.sign(
                {
                    userId: user._id.toString()
                },
                secret,
                {expiresIn : '1d'}
            )
            res.status(200).send({user: user.email, token: token, userId:user._id});
        }
        else{
            res.status(400).send('Wrong Password');
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.post('/register', async(req, res)=>{
    try{
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            field: req.body.field,
            experiences: req.body.experiences
        });
        user = await user.save();
        if(!user){
            return res.status(400).send('the user cannot be created!')
        }
        res.send(user);
    }
    catch(err){
        res.status(400).send(err);
    }
});


module.exports =router;