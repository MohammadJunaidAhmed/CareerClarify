const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const { Professional } = require('../models/Professional/professional');

router.get('/', async(req,res)=>{
    try{
        const profList = await Professional.find().select('-passwordHash');
        if(!profList){
            res.status(500).json({success:false})
        }
        res.send(profList);
    }
    catch(err){
        res.status(500).json({error: err});
    }
});

router.post('/register', async(req, res)=>{
    try{
        let professional = new Professional({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            field: req.body.field
        });
        professional = await professional.save();
        if(!professional){
            return res.status(400).send('the user cannot be created!')
        }
        res.send(professional);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/:id', async(req, res)=>{
    const prof = await Professional.findById(req.params.id);
    if(!prof){
        res.status(500).json({message: 'The professional with the given ID was not found.'})
    }
    res.status(200).send(prof);
});

router.delete('/:id', async(req, res)=>{
    Professional.findOneAndDelete(req.params.id).then(prof => {
        if(prof) {
            return res.status(200).json({success: true, message: 'the professional account is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "professional account not found!"})
        }
    }).catch(err=>{
        return res.status(500).json({success: false, error: err}) 
    })
});

module.exports =router;