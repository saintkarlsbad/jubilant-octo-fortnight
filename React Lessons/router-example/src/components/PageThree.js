import React from 'react';

// if in a function you pass props in a parameter
export default function Third(props) {
console.log(props)
    return (
        
        <div>
            <h1>DETAILS</h1>
            You clicked on {props.match.params.foodItem}
            </div>
    )
}

