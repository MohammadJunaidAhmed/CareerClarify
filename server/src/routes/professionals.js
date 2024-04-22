const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const { Professional } = require('../models/Professional/professional');
const { Experience } = require('../models/Experience/Experience');
const jwt = require('jsonwebtoken');

router.get('/', async(req,res)=>{
    try{
        const profList = await Professional.find().select('-passwordHash').populate('experiences');
        if(!profList){
            res.status(500).json({success:false})
        }
        res.send(profList);
    }
    catch(err){
        res.status(500).json({error: err});
    }
});

router.post('/login', async(req,res)=>{
    try{
        const prof = await Professional.findOne({email:req.body.email});
        const secret = process.env.SECRET;
        if(!prof){
            return res.status(404).send('Professional not found')
        }
        if(prof && bcrypt.compareSync(req.body.password,prof.passwordHash)){
            const token = jwt.sign(
                {
                    profId: prof._id.toString()
                },
                secret,
                {expiresIn : '1d'}
            )
            res.status(200).send({prof: prof.email, token: token, profId:prof._id});
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
        let professional = new Professional({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            field: req.body.field,
            experiences: req.body.experiences
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

router.put('/addexp/:id', async(req, res)=>{
    const profId = req.params.id;
    const prof = await Professional.findById(profId);
    if(!prof){
        return res.status(404).json({message: 'Professional account with the given ID could not be found!'});
    }
    let exp = new Experience({
        company: req.body.company,
        designation: req.body.designation,
        stillWorking: req.body.stillWorking,
        startDate: req.body.startDate,
        endDate: req.body.stillWorking ? 'to-date':req.body.endDate,
        profId:req.params.id,
        proof: req.body.proof,
    });
    exp = await exp.save();
    const profUpdated = await Professional.findByIdAndUpdate(
        profId,
        { $push: { experiences: exp._id } },
        { new: true }
    );
    if(!profUpdated){
        return res.status(500).json({message: 'Experience could not be added'});
    }
    return res.status(200).send(profUpdated);
});
router.get('/getexp/:id',async(req,res)=>{
    try{
        const profId = req.params.id;
        const experiences = await Experience.find({profId:profId});
        res.status(200).send(experiences);
    }
    catch(e){
        res.status(500).send(e);
    }

})

module.exports =router;