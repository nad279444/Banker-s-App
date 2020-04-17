import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import userReducer from './store/userReducer'
import {Provider} from "react-redux"
import thunk from 'redux-thunk';

const store = createStore(userReducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <Router/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
