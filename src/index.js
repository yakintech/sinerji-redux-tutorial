import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';


const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(rootReducer, applyMiddleware(thunk, logger ));

root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
