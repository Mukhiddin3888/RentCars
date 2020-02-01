import React from 'react';
import s from './UsersList.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import User1 from "./user1/User1";
import User2 from "./User2/User2";
import {addNewUserActionCreator, updateNewUserActionCreator} from "../../redux/List-Users-Reducer";

const Names = (props) => {
    let path = '/UsersList/' + props.id;
    return (
        <div className={s.avatarki}>
            <img src="images/Smiley.png" alt="avatarka"/>

            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const UsersList = (props) => {
    let silkaForButton = React.createRef();

    let addNewUsersL = () => {
        // props.dispatch({type: "ADD-NEW-USER"});
        props.dispatch(addNewUserActionCreator());

    }
    let updateNewText = () => {
        let changes = silkaForButton.current.value;
        //props.newUserM(changes);
        //props.dispatch({type:"UPDATE-NEW-USER", newUserM:changes});
        props.dispatch(updateNewUserActionCreator(changes));

    }

    let ListUsers =
        props.store._store.usersListPage.users.map(u => <Names name={u.name} id={u.id}/>);
    return (
        <BrowserRouter>
            <div className={s.main}>
                <div className={s.list}>
                    {ListUsers}
                </div>
                <div>
                    <textarea
                        onChange={updateNewText}
                        value={props.store.getStore().usersListPage.newUsers}
                        ref={silkaForButton}>

                    </textarea>
                    <button onClick={addNewUsersL}>Add Users</button>
                </div>
                <div className={s.navL}>
                    <Route path='/UsersList/1' render={() => <User1/> }/>
                    <Route path='/UsersList/2' render={() => <User2/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default UsersList;
