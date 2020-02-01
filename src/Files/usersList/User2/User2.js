
import React from 'react';
import s from './User2.module.css';

const User2 = (props) => {
    let usInfo= {
        name: 'AbbosKhan',
        age: '20',
        status: 'status active',
        data: ''
    }
    let usersInfo = (userI) => {

    }

    let silkaForUser1 = React.createRef();
    let AddInfo =()=>{
        let curValue= silkaForUser1.current.value;
        usersInfo(curValue);

    }
    let change =()=>{

    }
    return (
        <div className={s.info}>
            <div>
                <p>Name: {usInfo.name}</p>
                <p>age:{usInfo.age}</p>
                <p>status:{usInfo.status}</p>
                <p>data{usInfo.data}</p>


            </div>
            <div>
                <textarea ref={silkaForUser1}></textarea>
            </div>
            <div>
                <button
                    onChange={change}
                    onClick={AddInfo}>Add User Information!</button>
            </div>

        </div>
    );
}
export default User2;