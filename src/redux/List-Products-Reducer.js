const  ADD_NEW_CAR= "ADD_NEW_CAR";
const  UPDATE_NEW_CAR= "UPDATE_NEW_CAR";

let initialState={
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

const ListProductsReducer =(state=initialState, action)=>{
    if (action.type === ADD_NEW_CAR) {
        let nCar ={
            name: state.newCars,
            image:  state.images
        }

        state.cars.push(nCar);
        state.newCars = '';
    }
    else if (action.type === UPDATE_NEW_CAR){
        state.newCars = action.name;

    }
    return state;
}
export const addNewCarActionCreator=()=>({type:ADD_NEW_CAR});
export const updateNewCarActionCreator=(name)=> ({type:UPDATE_NEW_CAR, name:name});

export default ListProductsReducer;