/**
 * Created by muhid on 1/21/2020.
 */
import React from 'react';
import s from './User1.module.css';

const User1 = (props) => {
    let silkaForUser1 = React.createRef();
    let AddInfo =()=>{
        let curValue= silkaForUser1.current.value;
        alert(curValue);
    }
    return (
        <div className={s.info}>
            <div>
                <p>Price</p>
                <p>documentation</p>
                <p>User Information</p>
            </div>
            <div>
                <textarea ref={silkaForUser1}></textarea>
            </div>
            <div>
                <button onClick={AddInfo}>Add User Information!</button>
            </div>

        </div>
    );
}
export default User1;