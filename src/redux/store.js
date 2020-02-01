
import ListProductsReducer from './List-Products-Reducer';
import ListUsersReducer from './List-Users-Reducer';
let store ={
    _store : {
        usersListPage:{
            users: [
                {name: 'Mukhiddin', id: '1'},
                {name: 'AbbosKhan', id: '2'},
                {name: 'NurIslom', id: '3'},
                {name: 'Ilkham', id: '4'},
                {name: 'JoraBek', id: '5'}
            ],
            newUsers:"Add new Person"
        },
        listProductsPage:{
            cars: [
                {name: 'cobalt', image: 'Ravon_R4'},
                {name: 'orlando4', image: 'orlando4'},
                {name: 'lacetti5', image: 'lacetti5'},
                {name: 'spark', image: 'f7416c6s-960'},
                {name: 'traker', image: 'chevrolet-trax'},

            ],
            newCars:"",
            images:"lacetti5"
        }
    },
    _callSubscriber (){
        console.log('store changed')
    },

    getStore(){
      return this._store;
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

 /*   addNewUser () {
        let text = {
            name: this._store.usersListPage.newUsers,
            id: '6'
        }
        this._store.usersListPage.users.push(text);
        this._store.usersListPage.newUsers='';
        this._callSubscriber();
    },
    updateNewUser (newUserM) {
        this._store.usersListPage.newUsers = newUserM;
        this._callSubscriber();
    },
*/
    dispatch(action){
        this._store.usersListPage = ListUsersReducer(this._store.usersListPage, action);
        this._store.listProductsPage =ListProductsReducer(this._store.listProductsPage, action);

        this._callSubscriber();
    }
}

window.store = store;

export default store;