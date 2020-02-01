/**
 * Created by muhid on 1/21/2020.
 */
import React from 'react';
import s from './Header.module.css';
const Header = () => {
    return (
        <div className={s.header}>
            <div >
                <img src="./logo192.png" alt="react logo"/>
            </div>
            <div>
                <h1 className={s.title}> Easy Rent cars</h1>
            </div>
        </div>


    );
}
export default Header;