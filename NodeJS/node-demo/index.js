/// import express from 'express'///
/// require is for NODEJS in the backend///
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller');
var port = 3000
/// safe zone for ports is somewhere between 3000-12000

const app = express();

// TOP LEVEL MIDDLEWARE// >> every endpoint will go thru this >> req from client, runs code, then hits endpoint
// it takes the body of the req and pulls that info (takes the data from req.body)
//sending info
app.use(bodyParser.json())



/// i.e. happy.com >>>will find us where the server is
/// https://happy.com/api/getHappyThings /// >>> PATH= /api/getHappyThings
///HANDLER FUNCTION = function(request, response, next) {...}
///req, res for shorthand
/// you have to get a request before you can send a response
/// the moment it finds the matching path, it will fire the matching function 
/// METHOD = get, post, put, delete

/// ENPOINT = the destination of the request
// app.METHOD(PATH, HANDLER FUNCTION)    >>> this is the endpoint



app.get('/api/getPeople', ctrl.getPeople)

///colon after getPeople is REQUIRED! (id is just a placeholder)
/// + converts strings to numbers
///e.id is pulling the id element
//use .send if sending back an object/array
//use .json if sending back a string
app.get('/api/getPeople/:id', ctrl.getPeopleByID)

// app.get('/api/getPeople/:id', (req, res)=>{
//     console.log(req)
//     let person = people.filter(e=> {
//         return +req.params.id === e.id
//     })
//     res.status(200).json('person')
// })

// app.delete('/api/deletePerson/:id', (req, res)) etc etc if you wanted to delete them

// CREATE!
app.post('/api/addNewPerson', ctrl.addPerson)


//every object is an element, meaning (e)

app.listen(port, ()=>console.log(`listening on port ${port}`))//listen is just a method to listen to any incoming requests
//first argument is the port 
//^^
/// sudo npm install nodemon -g 

