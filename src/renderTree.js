/**
 * Created by muhid on 1/24/2020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewUser} from './redux/state';
import {BrowserRouter} from "react-router-dom";


export let renderTree=(state)=>{
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} addNewUser={addNewUser}   />
    </BrowserRouter>
    , document.getElementById('root'));
}


