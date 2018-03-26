const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.get('/hello', (req, res) => {
    res.send("stop")
}) 

app.post('/hello', (req, res) => {
    res.status(200).send('gotcha')
})


app.listen(4000, ()=> console.log('Listening on port 4000') )