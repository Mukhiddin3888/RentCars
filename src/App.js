/*import React from 'react';
 import logo from './logo.svg';
 import './App.css';

 function App() {
 return (
 <div className="App">
 <header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
 <p>
 Edit <code>src/App.js</code> and save to reload.
 </p>
 <a
 className="App-link"
 href="https://reactjs.org"
 target="_blank"
 rel="noopener noreferrer"
 >
 Learn React
 </a>
 </header>
 </div>
 );
 }

 export default App;*/
import React from 'react';
import './App.css';
import Header from "./Files/Header";
import Side from "./Files/Side";
import UsersList from "./Files/usersList/UsersList";
import {BrowserRouter, Route} from "react-router-dom";
import RavonR from "./Files/ProductsList/RavonR4/RavonR";
import Orlando from "./Files/ProductsList/Orlando/Orlando";
import ProductsListContainer from "./Files/ProductsList/ProductsListContainer";
import ProductsList from "./Files/ProductsList/ProductsList";


function App(props) {

    return (
        <BrowserRouter>
            <div className='app'>
                <Header />

                <Side />
                <div>
                    <Route exact path='/UsersList'
                           render={() => <UsersList
                               state={props.state}
                               store={props.store}
                               dispatch={props.dispatch}
                              // updateNewUser={props.updateNewUser.bind(props)}

                               /> }/>

                    <Route exact path='/ProductList'
                           render={() => <ProductsListContainer
                               state={props.state.ListProductsReducer}
                               dispatch={props.dispatch}
                              // store={props.store._store.listProductsPage}

                               /> }/>

                    <Route path='/ProductList/cobalt' component={RavonR }/>
                    <Route path='/ProductList/orlando4' component={Orlando }/>

                   {/* <Route exact path='/MUsersList'
                           render={() => <MUsersList users={props.state.users}

                                                     addNewUser={props.addNewUser}/> }/>*/}
                </div>

            </div>
        </BrowserRouter>
    );
}
export default App;