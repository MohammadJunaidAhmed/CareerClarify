const express = require('express')
const router = express.Router()
const { Experience } = require('../models/Experience/Experience');
const { Professional } = require('../models/Professional/professional');

router.get('/', async(req, res)=>{
    try{
        const exps = await Experience.find();
        res.status(200).send(exps);
    }
    catch(e){
        res.status(500).send(e);
    }
})
router.get('/unqcompanies', async(req, res)=>{
    const unqCompanies = await Experience.distinct('company');
    res.status(200).json(unqCompanies);
});

router.get('/:company', async(req,res)=>{
    const profs = await Experience.find({company:req.params.company}).populate('profId');
    res.status(200).json(profs);
});

router.get('/:id', async(req, res)=>{
    const exp = await Experience.findById(req.params.id);
    if(!exp){
        res.status(404).json({message: 'Could not find experience with the given id'})
    }
    res.status(200).send(exp);
});

router.post('/addexp', async(req, res)=>{
    const stillWorking = req.body.stillWorking;
    const uid = req.body.profId;
    let exp = new Experience({
        company: req.body.company,
        designation: req.body.designation,
        stillWorking: stillWorking,
        startDate: req.body.startDate,
        endDate: stillWorking ? 'to-date':req.body.endDate,
        proof: req.body.proof,
        profId: req.body.profId,
    });
    console.log(exp);

    exp = await exp.save();

    if(!exp){
        return res.status(400).send('the experience could not be added!');
    }
    const prof = await Professional.findById(uid);
    if(!prof){
        return res.status(400).send('the experience could not be added to professional!');
    }
    console.log(exp._id.toString());
    console.log(prof.experiences);
    prof.experiences.push(exp._id.toString());
    await prof.save();
    res.send(exp);
});

router.delete('/:id', async (req,res)=>{
    try{
        const exp = await Experience.findById(req.params.id);
        if(!exp){
            return res.status(404).json({success: false, message: 'Experience could not be found'});
        }
        let profId = exp.profId;
        if(!profId){
            Experience.findByIdAndDelete(req.params.id).then(exp => {
                if(exp){
                    return res.status(200).json({success: true, message: 'Experience is deleted!'})
                }
                else{
                    return res.status(404).json({success: false , message: "Experience not found!"})
                }
            }).catch(err=>{
                return res.status(500).json({success: false, error: err}) 
            });
        }
        profId = profId.toString();
        profId = profId.toString();
        const prof = await Professional.findById(profId);
        if(!prof){
            return res.status(404).json({success: false, message: 'Professional could not be found'});
        }
        // //Remove the exp_id from experience list of prof;
        prof.experiences = prof.experiences.filter(id => id != req.params.id);
        await prof.save();
        //Delete experience;
        Experience.findByIdAndDelete(req.params.id).then(exp => {
            if(exp){
                return res.status(200).json({success: true, message: 'Experience is deleted!'})
            }
            else{
                return res.status(404).json({success: false , message: "Experience not found!"})
            }
        }).catch(err=>{
            return res.status(500).json({success: false, error: err}) 
        })
    }
    catch(err){
        return res.status(500).send(err);
    }
});



module.exports =router;