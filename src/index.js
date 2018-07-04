import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import rootReducer from './Reducers/PostReducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStoreWithMiddleware)
  : createStoreWithMiddleware);

ReactDOM.render(
  <Provider store={store(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
