import React, { Component } from 'react'; //no dot slash if it's in the node_modules folder // Component is destructured - taking the values from an object and saving them to a variable - we want to use Component from React
import './App.css'; // dot slash if it's a file you've created
import Header from './components/Header.js'
import Footer from './components/Footer.js'


class App extends Component { // any component will have a capital letter - App not app //class is a blueprint for an object // extends says 'i want all of the goodness/inheritance from component
  constructor(props){
    super(props);
    this.state = {
      hobbies: ['flying like an eagle', 'kicking ass'],
      inputText: ''
    };
  }

  handleInputChange(e) {
    console.log('e.target.value')
    this.setState({ inputText: e.target.value })
  }

  click() {
    this.setState({
   hobbies: [...this.state.hobbies, this.state.inputText],
   input: ''
    })
  }
  render() { //function
   let list = this.state.hobbies.map( (hobby, index) => {
      return ( //returning JSX
        <p key={index}>{ hobby }</p>
      )
   })
    return (
      <div className="App">
      
        <Header />
        <h5>My List of Hobbies</h5>
        <input 
        value = {this.state.inputText}
         onChange={ (e) =>  this.handleInputChange(e)}/>

        <button onClick = {() => this.click()}>Add New Hobby!</button>
        { list }

        <Footer />
      </div>
    );
  }
}

export default App; // you HAVE TO EXPORT or else you can't import it into your index.js (or anywhere else)


//JSX = javascript in disguise 
//virtual DOM - react app renders to the actual DOM  - compares the differences b/t virtual and actual DOM