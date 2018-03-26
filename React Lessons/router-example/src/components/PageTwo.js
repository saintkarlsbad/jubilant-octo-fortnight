import React from 'react';
import {Link, Route} from 'react-router-dom';
import Sub1 from './Sub1';

export default function Two() {
    return (
        <div>
            <h1>My second route's content</h1>
            <Link to = '/PageTwo/Sub1'>Sub Route</Link>
      
            <Route path = '/PageTwo/Sub1'component = {Sub1} />            
         
        </div>
         
    )
    
   

}