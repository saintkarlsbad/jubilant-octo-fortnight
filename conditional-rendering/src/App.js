import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      products: [{name: 'test1', show:true}, {name: 'test2', show:false}, {name: 'test3', show:true}],
      admin: true
    }
  }

  show () {
    if (this.state.admin) {
      return <div> I AM ADMIN K</div>
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.admin ? <div> Hey I'm an admin </div> : <div> Not allowed </div>
        },
        {
          this.state.products.map((el, i, arr) => {
            //  return el.show ? <div>{el.name}</div> : <div> No product 4 u</div>
            return <div className = {el.show ? 'red': null}>{el.name}</div> //conditional rendering for css
          })
        },
        {
          this.show()
        }
      </div>
    );
  }
}

export default App;


// # React Router
// `npm i --save react-router-dom`
// - All components imported from this library must be destructured. 
// `import { HashRouter, Route, Link, Switch } from 'react-router-dom`
// ## HashRouter
// `<HashRouter></HashRouter>` 
// - Keeps UI in sync with the URL, like a manager
// - Everything from `react-router-dom` must be nested in the `HashRouter`
// ## Route
// `<Route path='' component={ // component you want to render} />`
// - `path` is the URL ending for where you want to navigate
// - `component` is the component that you want to render when the path matches the URL
// ## Exact
// `exact` 
// - Is used only the `Route` Component
// - Ensures that the Route only loads when the path matches exactly
// ## Link
// `<Link to=''>Something</Link>`
// - `to` prop must match the `path` prop from the Route component in order to render the component that you want to render
// - You will never use a colon in the string of the `to` prop for params, only the value.
// ## Switch
// `<Switch></Switch>`
// - You nest `Route` components in the `Switch` component, it will load only ONE `Route` component at a time
// - ORDER IS VERY IMPORTANT because it will only load the first route and ignore the rest
// ## URL Params
// `this.props.match.params.[PROPERTY NAME]`
// `<Route path='/users/:id' .... >`
// - Must indicate in `Route `that it is taking params
// - The route is the ONLY location you will use the colon
// - Every link to this route will use an actual value in place of the colon
// ## routes.js
// - Routes file that holds the Routes and is imported and rendered in `App.js`
// - Lowercase because it is not a component
// - Don't forget to import `React`
