const express=require("express");
const mongoose= require("mongoose");
const app=express();
const Dotenv = require("dotenv")
// const employeeRoutes= require('./routes/emplyeeRoute')
const userRoutes = require('./routes/userRoutes')
const groundRoutes = require('./routes/groundRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
var cors=require("cors");
app.use(cors());
app.use(express.json());
// app.use('/employee',employeeRoutes);
Dotenv.config()
const url2 = process.env.db
console.log(url2,'-------------')

mongoose.connect(url2).then(()=>{
    console.log("Database Connected Succssfully")
}).catch((err)=>{
    console.log(err)
});
const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log('App is running on port ' + port);
});
