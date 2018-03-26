import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// export default function MyFirstRoute() {
//     return <h1>First Route!!</h1>

// }
export default class MyFirstRoute extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            foodItems: ['apple', 'cake']
        }
    }

    render () {
        let food = this.state.foodItems.map((item, i)=> {
            return (
                <Link to = {`/PageThree/${item}`} key={i}>
                    <p >{item}</p>
                </Link>
            )
        })
        return (
            <div>
            <h1>My Store</h1>
            {food}
            </div>
        )
    }
}