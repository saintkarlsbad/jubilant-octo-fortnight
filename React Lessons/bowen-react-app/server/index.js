require('dotenv').config();

const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , controller = require('./controller');

const {SERVER_PORT, SESSION_SECRET, CONNECTIONSTRING} = process.env;

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//API

app.get('/api/create-profile', controller.getUsers) //create
app.post('/api/users', controller.getUsers) //read

//API

massive(CONNECTIONSTRING).then( (db) => {
    app.set('db', db);
  })

app.listen(SERVER_PORT, () => {
    console.log(`You are on port ${SERVER_PORT}!`)
});