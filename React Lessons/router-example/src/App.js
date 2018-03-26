import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import routes from './routes.js';

// imagine what's in react library >>> pulling from react router dom library
// export class HashRouter extends Component {}
// you COULD create a page called routes.js that had all the routing info and then info routes.js to app.js

class App extends Component {
  render() {
    return (
       <div className="App">  
       <div>
       <Link to = '/'> <span>Home</span> </Link>
        <br />
        <Link to = '/PageTwo'><span>Second</span></Link>
        <br />
        <Link to = '/PageThree'><span>THIRD</span></Link>
      </div>
        {routes}
     
      </div>
    )
  }
}

export default App;
