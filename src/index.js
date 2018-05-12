import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const apiURL = process.env.apiURL || 'http://localhost:3000/api/';
console.log("apiURL", apiURL)
ReactDOM.render(<App apiURL={apiURL} />, document.getElementById('root'));
registerServiceWorker();
