import React from 'react';
import {NavLink} from "react-router-dom";
import {addNewCarActionCreator, updateNewCarActionCreator} from "../../redux/List-Products-Reducer";
import ProductsList from "./ProductsList";
debugger;
const ListItem = (props) => {
    let path = '/ProductList/' + props.name;
    let path2 = 'images/' + props.image + '.jpg';

    return (
        <NavLink to={path}> <img src={path2} alt=""/> {props.name} </NavLink>
        /*  <NavLink to={path}> <img src="images/Ravon_R4.jpg" alt="cobalt" /> </NavLink>*/
    )
}

const ProductsListContainer = (props) => {
    let listCars =
        props.state.listProductsPage.cars.map(r => <ListItem name={r.name} image={r.image}/>)
    let clicked=()=> {
        props.dispatch(addNewCarActionCreator());
    };

    let changed=(e)=> {
        props.dispatch(updateNewCarActionCreator(e));

    };

    return (
        <div >
           <ProductsList
               state={props.state.ListProductsReducer}
               clicked={clicked}
               changed={changed}
               listCars={listCars}

           />

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
export default ProductsListContainer;
