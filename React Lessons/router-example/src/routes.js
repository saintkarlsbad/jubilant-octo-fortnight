import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MyFirstRoute from './components/MyFirstRoute';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree'

export default (
<Switch>
    <Route exact path = '/' component = {MyFirstRoute}/>
    <Route path = '/PageTwo' component = {PageTwo}/>
    <Route path = '/PageThree/:foodItem' component ={PageThree}/>
</Switch> 
)

