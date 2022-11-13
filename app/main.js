  import express from "express";
 import mongoose from "mongoose";
 import path from 'path';
 import productRoute from './routes/productRoute'
 import "dotenv/config";


const app = express();
app.use(express.json());



 app.use('/static', express.static(path.join(__dirname, 'assets')))

app.get("/welcome",(req, res) => {
    // res.send("My first API")
    res.json({message:"hellooooooo"});
});
app.use("/products",productRoute);


    
   const databaseUrl ="mongodb://localhost:27017/products"    //process.env.DATABASE_URL
   mongoose.connect(databaseUrl,{ useNewUrlParser: true}).then(()=>{
    app.listen(5000,()=>{
        console.log("server is running on port 5000");
   })
   })    




