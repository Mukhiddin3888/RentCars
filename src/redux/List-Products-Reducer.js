const  ADD_NEW_CAR= "ADD_NEW_CAR";
const  UPDATE_NEW_CAR= "UPDATE_NEW_CAR";

let initialState={
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
}

const ListProductsReducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_NEW_CAR:
            let nCar = {
                name: state.listProductsPage.newCars,
                image: state.listProductsPage.images
            }
            state.listProductsPage.cars.push(nCar);
            state.listProductsPage.newCars = '';
            return state;

        case UPDATE_NEW_CAR:
            state.listProductsPage.newCars = action.name;
            return state;

        default : return state;
    }
}
export const addNewCarActionCreator=()=>({type:ADD_NEW_CAR});
export const updateNewCarActionCreator=(name)=> ({type:UPDATE_NEW_CAR, name:name});

export default ListProductsReducer;