/**
 * Created by muhid on 1/24/2020.
 */

import {renderTree} from "../renderTree";
let state = {
    cars: [
        {name: 'cobalt', image: 'Ravon_R4'},
        {name: 'orlando4', image: 'orlando4'},
        {name: 'lacetti5', image: 'lacetti5'},
        {name: 'spark', image: 'f7416c6s-960'},
        {name: 'traker', image: 'chevrolet-trax'},

    ],
    users : [
        {name: 'Mukhiddin', id: '1'},
        {name: 'AbbosKhan', id: '2'},
        {name: 'NurIslom', id: '3'},
        {name: 'Ilkham', id: '4'},
        {name: 'JoraBek', id: '5'}

    ]
}

export let addNewUser =(UserL)=> {
    let text = {
        name:UserL,
        id:'6'
    }
    state.users.push(text);
    renderTree(state);
}

export default state;