import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export let renderTree=(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
                //updateNewUser={store.updateNewUser.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root'));
}


renderTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    renderTree(state);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
