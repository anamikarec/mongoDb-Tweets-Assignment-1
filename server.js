const express=require("express");
const app =express();
const cors= require('cors');
const connect = require('./config/db');
const userRouter = require('./routes/user.route');

const PORT=5001;

//cors
app.use(cors());
app.use(express.json())

app.use("/users", userRouter);

const start= async ()=>{
    await connect();
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`);
    })
}

module.exports=start;