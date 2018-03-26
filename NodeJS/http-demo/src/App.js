import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
    this.getUsers=this.getUsers.bind(this)
  }
/// AXIOS IS JUST A BIG OBJECT >>> get, put, post, delete<<< all methods that need to be invoked (url where we get info)
/// url will go out to server and get info we need
/// PROMISE is returned w/ GETmethod<< telling javascript to "hang tight and you'll get your info soon" i "promise" you'll get it soon
/// check console for methods to be called... i.e. "then" in below
///when we invoke GET, we will get a promise of data, the promise obj has a method called then, and takes 1 argument which is 1 anonymous function called response
/// when using someone else's API, it can be structured however they want. pay attention to the properties they put in... it could be labled as DATA or as RESULTS
  getUsers() {
    let promise = axios.get("https://swapi.co/api/people/")
    promise.then((response)=> {
      console.log(response.data.results)
      this.setState({
        users: response.data.results
      })
    })
  }

  /// REMEMBER WHAT MAP MEANS
  ///

  render() {
    let formattedUsers = this.state.users.map((element, index) => {
      return (
        <div key={index + element.name}>
        <p> {element.name} </p>

        </div>
      )
    })

    return (
      <div className="App">
        <h1>USERS</h1>
        <button onClick={this.getUsers}>get users</button>
        {formattedUsers}
      </div>
    );
  }
}

export default App;
