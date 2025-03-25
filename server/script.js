const express = require('express');
const connectDB = require('./src/config/db');
const apiRouter = require('./src/Routes')
require('dotenv').config()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config()

app.use(
  cors({
    origin:"http://localhost:3000",
    credentials:true,
  })
);

app.use(cookieParser());
app.use(express.json())

app.get('/',(req, res)=> {
  res.send('Server is running')
})

app.use('/api',apiRouter)

connectDB()
app.listen(process.env.PORT,()=>{
  console.log('Server is running on port ${process.env.port}');
})

