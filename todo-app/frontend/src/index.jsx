import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider} from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi' //Faz uma ação mas não espera a outra terminar
import thunk from 'redux-thunk' //Faz uma ação mas espera a anterior ser finalizada

import App from './main/app'
import reducers from './main/reducers'
// import { combineReducers, createStore } from 'redux'
// import { Provider } from 'react-redux'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))