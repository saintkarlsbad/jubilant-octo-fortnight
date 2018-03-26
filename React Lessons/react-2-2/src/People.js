import React from 'react';
import './People.css'

export default class People extends React.Component {
    render() {
       
// accessing props from App.js
        // let posts = this.props.posts // another way to do it
        let { posts } = this.props

//map function is a transformer funcion -- take an array, map over it, gimme each item (person) in array 1 at a time 
        let peopleJSX = posts.map((person) => {
            return (
                <div className="card">
                    <div><strong>{person.author}</strong></div>
                    <div>{person.title}</div>
                    <div>{person.text}</div>
                </div>
            )
        })

        return (
            <div>
                {peopleJSX}
            </div>
        )
    }

}