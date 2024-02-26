require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const professionalRoutes = require('./src/routes/professionals');
const experienceRoutes = require('./src/routes/experience');

const api = process.env.API_URL;
const port = process.env.PORT || 3000;


app.use(cors());
app.options('*', cors())

//middleware 
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('tiny'));



app.use(`${api}/prof`, professionalRoutes);
app.use(`${api}/exp`, experienceRoutes);





mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    dbName: 'careerclarify-database'
})
.then(()=>{
    console.log("Database connection is ready!")
    app.listen(port,'0.0.0.0', ()=>{
        console.log('server is running http://localhost:3000');
    })
})