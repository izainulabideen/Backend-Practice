require('dotenv').config();
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send('Hello Backend')
})

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT} http://localhost:3000`);
})