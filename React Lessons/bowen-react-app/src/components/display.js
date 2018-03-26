import React, { Component } from 'react';

export default class Display extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.displayMessage}</h1>
            </div>
        )
    }
}