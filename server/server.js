const express =require('express');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');
const cors= require('cors');
mongoose.connect('mongodb+srv://jatinsoni291302:fS1LokHTxNDi0eNg@cluster0.r9tpm.mongodb.net/').then(()=>console.log("MongoDE is connected")).catch((error)=>console.log(error));
const app = express();
const PORT=process.env.PORT||5000;

app.use(
    cors({
        origin:'http://localhost:5173/',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expire',
            'Pragma'
        ],
        credentials:true
    }));
    app.use(cookieParser());
    app.use(express.json());
    app.listen(PORT,()=>console.log(`Server is now running on ${PORT}`));