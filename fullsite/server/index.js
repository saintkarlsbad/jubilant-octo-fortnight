require('dotenv').config()
const express = require( 'express'),
      session = require ('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-Auth0'),
      massive = require('massive')

const {
    SERVER_PORT,
    SESSION_SECRET,
    CALLBACK_URL,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING
}   = process.env   

const app = express();

massive(CONNECTION_STRING).then( db => { //app is an obj, using dot notation to access set method, set a key value pair 
    app.set('db', db); //db is a key with a value of db - setting up on global obj
})

app.use(express.static(__dirname + '../build')) //here's the whole folder of static assets
//ask about ^^ changing to one server acting as two

app.use (session ({
    secret: SESSION_SECRET,
    resave:false,
    saveUninitialized:true
}))

app.use (passport.initialize());
app.use(passport.session());

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET, 
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
    db.find_user([profile.id]).then(users => { //promise of users getting returned (array) being passed as dollar sign values in create_user.sql
        if (!users[0]) { //if no users come back... the following code will run >>>
            db.create_user([profile.displayName, profile.picture, profile.id]).then(userCreated => { //res is the user that's created
                done(null, userCreated[0].id)
            })
        } else {
            done(null, users[0].id) //done works like next in middleware - just saying we're done with this function and invokes serialize
        }
    }) // massive is converting our query into a function we can use
 }
))

passport.serializeUser( (id, done)=> { //
    done(null, id)
})

passport.deserializeUser( (id, done)=> { ///// gets info from REQ.USER
    app.get('db').find_session_user([id]).then( user => {
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/private',
    failureRedirect: 'http://localhost:3000/'
}))
app.get('/auth/me', (req, res)=> {
    if (req.user) {
        res.status(200).send(req.user)
    } else {
        res.status(401).send('Nice try, dumbass')
    }
})

app.get('/auth/logout', (req, res)=> {
    req.logOut();
    res.redirect('http://localhost:3000/')
})

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))




//deserialize - takes id and passes into callback function in deserialize - db.getuser([id]).then => user
                    // done(null, user) >>>>> req.user!!!
                    // grabs id from session, queries db, and puts info on req.user
 //////// !!!!!!!!!!//info from deserialize is available on req.user!!!!! 
