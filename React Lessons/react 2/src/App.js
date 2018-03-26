import React, { Component } from 'react';
import './App.css';
import Child from './child.js'

export default class App extends Component {
  constructor (){
    super()
    this.state = {
        number: 0
    }

    this.increaseNumber = this.increaseNumber.bind(this)

  }
    increaseNumber() {
      this.setState({
        number: this.state.number+1
      })
    }
  render() {
    return (
      <div className="App" style={{background: '#DDD', height:'300px', padding: '50px'}}>
        <h1>PARENT!</h1>
        {/* <button onClick={()=> this.increaseNumber()}>INCREASE NUMBER</button> */}
        <Child greeting='Hello!' num={this.state.number} increaseFn={this.increaseNumber}/>
      </div>
    );
  }
}





