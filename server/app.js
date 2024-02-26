const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    dbName: 'careerclarify-database'
})
.then(()=>{
    console.log("Database connection is ready!")
    app.listen(3000,'0.0.0.0', ()=>{
        console.log('server is running http://localhost:3000');
    })
})