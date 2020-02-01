/**
 * Created by muhid on 1/21/2020.
 */
import React from 'react';
import s from './RavonR.module.css'

const RavonR=()=>{
    let Ravon={
        name: "Ravon R4 ",
        price: '200$ per day',
        colors:'white, red, black'
    }

    return(
      <div className={s.Ravon}>
          <h3>Name:{Ravon.name}</h3>
          <p>Price: {Ravon.price} </p>
          <p>Color: {Ravon.colors} </p>

      </div>
    );
}
export default RavonR;