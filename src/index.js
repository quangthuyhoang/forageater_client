import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Containers/AppContainer';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store/configureStore';
const apiURL = process.env.apiURL || 'http://localhost:3000/api/';
const store = configureStore();

// ReactDOM.render(<App apiURL={apiURL} />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><AppContainer apiURL={apiURL}/></Provider>, document.getElementById('root'));
registerServiceWorker();
