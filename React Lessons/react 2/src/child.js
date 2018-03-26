import React, { Component} from 'react';

export default class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
                unicorn: props.num
        }
    }

    componentWillReceiveProps (newProps){
        this.setState({
            unicorn:newProps.num
        })
}    

    render() {
        console.log(this.props)
        return (
            <div style={{background:'#AAA', height:'200px'}}>
                <h3>CHILD!</h3>
                <p>{ this.props.greeting }</p>
                <p>PROPS NUMBER: {this.props.num}</p>
                <p>STATE NUMBER: {this.state.unicorn}</p>
                <button onClick={this.props.increaseFn}>Increase Number</button>
            </div>
        )
    }
}
