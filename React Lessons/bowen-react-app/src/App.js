import React, { Component } from 'react';
import './App.css';
import Display from './components/display';
import Input from './components/input'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'hello'
    }
    this.newMessage = this.newMessage.bind(this);
  }

  newMessage(text) {
    this.setState({
      message: text
    })
  }

  render() {
    return (
      <div className="App">
        <Display displayMessage={this.state.message}/>
        <Input inputText={this.newMessage}/>
      </div>
    );
  }
}

export default App;