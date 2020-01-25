/**
 * Created by muhid on 1/21/2020.
 */
import React from 'react';
import s from './Side.module.css';
import {NavLink} from 'react-router-dom';


const Side = (props) => {
    return (
        <div className={s.side }>
            <div>
                <NavLink to='/UsersList'  > List of Users</NavLink>
            </div>
            <div>
                <NavLink to='/ProductList' >List of Products</NavLink>
            </div>
          {/*  <div>
                <NavLink to='/MUsersList' >Manage List of Users</NavLink>
            </div>
            <div>
                <NavLink to='/ProductList' >Manage List of Products</NavLink>
            </div>*/}


        </div>
    );
}
export default Side;