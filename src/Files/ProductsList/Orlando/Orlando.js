
import React from 'react';
import s from './Orlando.module.css'

const Orlando=()=>{
    let Orlando={
        name: "Orlando ",
        price: '350$ per day',
        colors:'white, red, black'

    }

    return(
        <div className={s.Orlando}>
            <h3>Name:{Orlando.name}</h3>
            <p>Price: {Orlando.price} </p>
            <p>Color: {Orlando.colors} </p>

        </div>
    );
}
export default Orlando;