import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import People from './People';
import AddPost from './AddPost'

class App extends Component {
  constructor() {
    super() //super helps render Component into App //borrowing from the parent //super invokes constructor method on the parent
    this.state = {
      name: 'Karl',
      posts: [
        { author: "Marlon Brando", title: "A post", text: "More text" },
        { author: "Sheniqua", title: "A post", text: "More text" },
        { author: "Karl", title: "A post", text: "More text" },
        { author: "Bob", title: "A post", text: "More text" },
        { author: "Phteven", title: "A post", text: "More text" }
    ]
    } 
    this.add = this.add.bind(this)
  }
//if you pass a function of a prop you MUST bind it

  add(posts) {
    //by passing nothing into slice, it will take everything from posts
    let newPosts = this.state.posts.slice();
    newPosts.push(posts)
    this.setState({
      posts: newPosts
    })
  }

  render() {
    return (
      <div className="App"> 
       <Nav userName = {this.state.name}/> 
{/* // Nav is a Component class // green is for Component */}
        <AddPost addPosts = {this.add}/>
        <People posts = {this.state.posts}/>
      </div>
    );
  }
}

export default App;
