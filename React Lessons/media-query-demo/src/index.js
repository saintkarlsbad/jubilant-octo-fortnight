import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Animations from './Animations.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Animations />, document.getElementById('root'));
registerServiceWorker();
