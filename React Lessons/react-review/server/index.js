const express = require('express'),
    bodyParser = require('body-parser')
    ctrl = require('./controllers/controller.js')
    // cors = require('cors')

const port = 3002,
      app = express();

      app.use(bodyParser.json() );



app.post('./api/addPark', (req, res)=>{
    let {park} = req.body
    console.log(park)
    parks.push(park)
    res.status(200).send(park)
})


      app.listen(port, ()=> {console.log(`Server listening on port ${port}`);
    });
