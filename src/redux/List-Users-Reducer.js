const UPDATE_NEW_USER="UPDATE-NEW-USER";
const ADD_NEW_USER ="ADD-NEW-USER";

let initialState= {
    users: [
        {name: 'Mukhiddin', id: '1'},
        {name: 'AbbosKhan', id: '2'},
        {name: 'NurIslom', id: '3'},
        {name: 'Ilkham', id: '4'},
        {name: 'JoraBek', id: '5'}
    ],
    newUsers:"Add new Person"
}

const ListUsersReducer=(state=initialState, action)=>{
    if (action.type === ADD_NEW_USER){
        let text = {
            name: state.newUsers,
            id: '6'
        }
        state.users.push(text);
        state.newUsers='';
    }
    else if (action.type === UPDATE_NEW_USER){
        state.newUsers = action.newUserM;
    }
    return state;
}

export const addNewUserActionCreator=()=>({type:ADD_NEW_USER});
export const updateNewUserActionCreator=(changes)=> ({type:UPDATE_NEW_USER, newUserM:changes});


export default ListUsersReducer;