const express = require('express');
const app = express();
require('dotenv').config()

app.get('/',(req, res)=> {
  res.send('Server is running')
})

app.listen(process.env.PORT)