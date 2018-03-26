import React from 'react';
import './Nav.css'

export default class Nav extends React.Component {
    render () {
       let name = this.props.userName.toUpperCase(); // now we have data from the parent component (App)// Karl (name) is coming from App (the parent)
        return (
            <div className = 'navbar'>I am {this.props.userName}{name}</div>
        )
    }
}