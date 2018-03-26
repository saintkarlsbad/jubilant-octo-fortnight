import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animation1: false
    }
  }
  render() {
    return (
      <div className="App">
        <nav className = 'nav'></nav>
        <div className = 'square'></div>
        <div onClick = {()=> this.setState({animation1:!this.state.animation1})}className = {this.state.animation1 ? 'chameleon animation1' : 'animation1'}></div>
        <br/>
        <br/>
        <br/>
        <div className = 'spin'></div>
      </div>
    );
  }
}

export default App;
