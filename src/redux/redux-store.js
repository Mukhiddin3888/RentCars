/**
 * Created by muhid on 2/2/2020.
 */
import {combineReducers, createStore} from "redux";
import ListUsersReducer from './List-Users-Reducer';
import ListProductsReducer from './List-Products-Reducer';


let reducers = combineReducers({
    ListUsersReducer:ListUsersReducer,
    ListProductsReducer:ListProductsReducer
})

let store = createStore(reducers);

export default store;