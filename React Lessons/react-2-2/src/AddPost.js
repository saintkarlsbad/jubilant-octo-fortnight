import React from 'react';
import './AddPost.css'


export default class AddPost extends React.Component {
    add() {
       let author = this.refs.author.value();
       let title = this.refs.title.value();
       let text = this.refs.text.value();

       let newPost = {
           author: author,
           title: title,
           text: text
       }

       this.props.addPost(newPost)

    }
    render() {
//in react unique ids are called ref
        return (
            <div>
               <input ref='author' placeholder='Author'/>
               <input ref='title' placeholder='Title'/>
               <input ref='text' placeholder='Text'/>
               <button onClick = {(e)=> this.add()}  >Add</button>
            </div>
        )
    }

}