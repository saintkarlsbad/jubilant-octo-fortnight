import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.state = {
      greeting: []
    }
    this.getGotcha=this.getGotcha.bind(this);
  }

  getHello(){
    axios.get('/hello').then(res => {console.log(res.data)}
      )
  }

  getGotcha() {
    axios.post('/hello').then(res => {console.log(res.data)
    let hi = this.state.greeting
    let sup = hi.push(res.data) //i don't need to declare a new variable to get this to display
    this.setState({greeting: hi}) // this is connected to the JSONstringify down below in the P tag
    })
  }
  

  render() {
    return (
      <div className="App">
        <button onClick = {this.getHello}>CLICKDIS</button>
        <button onClick = {this.getGotcha}>GOTYA</button>
        <p>{JSON.stringify(this.state.greeting)}Well does it work or does it not work?</p>
      </div>
    );
  }
}

export default App;
