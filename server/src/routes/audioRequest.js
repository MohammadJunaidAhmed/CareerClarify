const express = require('express');
const { AudioRequest } = require('../models/Requests/AudioRequests/AudioRequest');
const router = express.Router()
const { MongoClient, GridFSBucket } = require('mongodb');
const { removePassiveEventListener } = require('react-scroll/modules/mixins/passive-event-listeners');


router.get('/', async(req,res)=>{
    const audRequests = await AudioRequest.find();
    if(!audRequests){
        res.status(500).send({message: 'Some unknown error in audRequests'});
    }
    res.status(200).send(audRequests)
});

router.post('/saveAudio', async(req, res)=>{

    let audReq = req.body.audioData;
    console.log("Audio request is" + audReq);
    // try{
    //     const response = await fetch(audReq);
    //     if(!response){
    //         return res.send({message: "Audio req Not found"})
    //     };
    //     // console.log("RESPONSE IS: " + response);
    // }
    // catch(err){
    //     console.log(err);
    // }
    // const blobData = await response.blob();
    // if(!blobData){
    //     return res.send({message: 'Error in blob data'})
    // };
    // console.log("BLOB DATA IS: " + blobData);


    // let audioRequest = new AudioRequest({
    //     audioData: req.body.audioData,
    // });
    // // blobData: blobData

    // audioRequest = await audioRequest.save();

    // res.send(audioRequest);
    res.send("END")
});


module.exports =router;