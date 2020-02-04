const UPDATE_NEW_USER = "UPDATE-NEW-USER";
const ADD_NEW_USER = "ADD-NEW-USER";

let initialState = {
    usersListPage: {
        users: [
            {name: 'Mukhiddin', id: '1'},
            {name: 'AbbosKhan', id: '2'},
            {name: 'NurIslom', id: '3'},
            {name: 'Ilkham', id: '4'},
            {name: 'JoraBek', id: '5'}
        ],
        newUsers: "Add new Person"
    }
};

const ListUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            let text = {
                name: state.usersListPage.newUsers,
                id: '6'
            }
            state.usersListPage.users.push(text);
            state.usersListPage.newUsers = '';
            return state;

        case UPDATE_NEW_USER:
            state.usersListPage.newUsers = action.newUserM;
            return state;

        default:
            return state;
    }
}

export const addNewUserActionCreator = () => ({type: ADD_NEW_USER});
export const updateNewUserActionCreator = (changes) => ({type: UPDATE_NEW_USER, newUserM: changes});


export default ListUsersReducer;