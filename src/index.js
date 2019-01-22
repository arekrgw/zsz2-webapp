import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { initialState, deviceHash } from './utils/utilities';

import App from './App';



export const store = createStore(allReducers, initialState, applyMiddleware(thunk));
deviceHash();



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
    

