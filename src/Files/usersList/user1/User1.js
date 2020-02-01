import React from 'react';
import s from './User1.module.css';
let usInfo = {
    name: 'Mukhiddin',
    age: '22',
    status: 'status active',
    data: 'nothing is possible'
}

const User1 = (props) => {
    return (
        <div className={s.info}>
            <div>
                <p>Name: {usInfo.name}</p>
                <p>age:{usInfo.age}</p>
                <p>status:{usInfo.status}</p>
                <p>data{usInfo.data}</p>
            </div>

        </div>
    );
}
export default User1;