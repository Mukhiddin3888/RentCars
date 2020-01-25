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
import ProductsList from "./Files/ProductsList/ProductsList";
import {BrowserRouter, Route} from "react-router-dom";
import RavonR from "./Files/ProductsList/RavonR4/RavonR";


function App(props) {

    return (
        <BrowserRouter>
            <div className='app'>
                <Header />

                <Side />
                <div>
                    <Route exact path='/UsersList'
                           render={() => <UsersList
                               users={props.state.users}
                               addNewUser={props.addNewUser}
                               usersInfo={props.state.usersInfo} /> }/>

                    <Route exact path='/ProductList'
                           render={() => <ProductsList
                               cars={props.state.cars}/> }/>

                    <Route path='/ProductList/cobalt' component={RavonR }/>
                   {/* <Route exact path='/MUsersList'
                           render={() => <MUsersList users={props.state.users}

                                                     addNewUser={props.addNewUser}/> }/>*/}
                </div>

            </div>
        </BrowserRouter>
    );
}
export default App;