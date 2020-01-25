import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {renderTree} from './renderTree';
/*

 let cars = [
 {name: 'cobalt', image: 'Ravon_R4'},
 {name: 'orlando4', image: 'orlando4'},
 {name: 'lacetti5', image: 'lacetti5'},
 {name: 'spark', image: 'f7416c6s-960'},
 {name: 'traker', image: 'chevrolet-trax'},

 ]
 let users = [
 {name: 'Mukhiddin', id: '1'},
 {name: 'AbbosKhan', id: '2'},
 {name: 'NurIslom', id: '3'},
 {name: 'Ilkham', id: '4'},
 {name: 'JoraBek', id: '5'}

 ]
 */

/*
 addNewUser('New User Asr');
 */

renderTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
