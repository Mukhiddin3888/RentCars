/**
 * Created by muhid on 1/21/2020.
 */
import React from 'react';
import s from './ProductList.module.css';
import {NavLink} from "react-router-dom";


const ListItem = (props) => {
    let path = '/ProductList/' + props.name;
    let path2 = 'images/' + props.image + '.jpg';

    return (
        <NavLink to={path}> <img src={path2} alt="ListItems"/> </NavLink>
        /*  <NavLink to={path}> <img src="images/Ravon_R4.jpg" alt="cobalt" /> </NavLink>*/
    )
}

const ProductsList = (props) => {

    let listCars =
        props.cars.map(r => <ListItem name={r.name} image={r.image}/>)
    return (
        <div className={s.chevrolet}>
            <h2>Press images to see information about cars</h2>
            <div className={s.car1}>
                {listCars}
            </div>
            <div className={s.add}>
                <textarea></textarea>
                <button>Add Cars</button>
            </div>
            {/*   <div className={s.car2}>

             <ListItem name="orlando4" image="orlando4"/>

             <img src="images/orlando4.jpg"  alt="orlando"/>
             </div>
             <div className={s.car3}>

             <Route path='/ProductList/lacetti5' render={()=> <RavonR /> }/>

             <ListItem name="lacetti5" image="lacetti5"/>

             <img src="images/lacetti5.jpg" alt="lacetti"/>
             </div>
             <div className={s.car4}>
             <ListItem name="spark" image="f7416c6s-960"/>
             </div>
             <div className={s.car5}>
             <ListItem name="traker" image="chevrolet-trax"/>
             </div>
             */}

        </div>

    );
}
export default ProductsList;