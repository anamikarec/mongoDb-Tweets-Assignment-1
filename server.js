const express = require('express');
const app = express();
const cors = require('cors');

const connect = require('./config/db');
const userRouter = require('./routes/users.route');
const tweetsRouter = require('./routes/tweets.route');

const PORT = 3001;
app.use(cors());
app.use(express.json());

app.use("/users",userRouter);
app.use("/tweets",tweetsRouter);



