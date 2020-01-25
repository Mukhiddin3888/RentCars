
import React from 'react';
import s from './UsersList.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import User1 from "./user1/User1";

const Names = (props) => {
    let path = '/UsersList/' + props.id;
    return (
        <div className={s.avatarki}>
            <img src="images/sorry.jpg" alt="avatarka" />

            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const UsersList = (props) => {
    let silkaForButton = React.createRef();
    let textInfo  =()=>{
        let text=  silkaForButton.current.value;
        props.addNewUser(text);
        alert('You added '+text);
        silkaForButton.current.value='';

    }
    let updateNewText=()=>{

    }

    let ListUsers =
        props.users.map(u => <Names name={u.name} id={u.id}/>);
    return (
        <BrowserRouter>
            <div className={s.main}>
                <div className={s.list}>
                    {ListUsers}
                </div>
                <div>
                    <textarea
                        onChange={updateNewText}
                        ref={silkaForButton}></textarea>
                    <button onClick={textInfo}>Add Users</button>
                </div>
                <div className={s.navL}>
                    <Route path='/UsersList/1' render={() => <User1 /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default UsersList;
