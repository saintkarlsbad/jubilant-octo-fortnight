import React from 'react';
import './Animations.css'

export default class Animations extends React.Component {
    constructor(props) {
        super (props)

        this.state = {
            slide:false
        }
    }

    render() {
        return (
            <div>
                <nav className = 'nav'>
                <div 
                onClick = {()=>this.setState({ slide: !this.state.slide })}
                className = 'ham'>HAM
                </div>
                </nav>
                <div></div>
                <div></div>
                <div className ={this.state.slide ? 'menu slide' : 'menu'}></div>
               
            </div>
        )
    }
}