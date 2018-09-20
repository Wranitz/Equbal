/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

ReactDOM.render(
    <Provider store={store}>
        <App />
        
    </Provider>

    , document.getElementById('root'));