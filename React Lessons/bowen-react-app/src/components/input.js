import React, { Component } from 'react';

export default class Input extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.inputText} onChange={e => this.setState({inputText: e.target.value})}/>
                <button onClick={() => this.props.inputText(this.state.inputText)}>Submit Text</button>
            </div>
        )
    }
}