import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF, ADD_SMURF_ERROR} from '../actions/index'

const initialState = {
    smurfs:[],
    isLoading: false,
    error: 'Gargamel activity. Smurf Error',
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case (FETCH_SMURFS_START):
            return({
                ...state,
                isLoading: true,
                error: ''
            })
        case (FETCH_SMURFS_SUCCESS):
            return({
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            })  
        case (FETCH_SMURFS_FAILURE):
            return({
                ...state,
                isLoading: false,
                error: state.error,
            })  
        case (ADD_SMURF):
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }) 
        case (ADD_SMURF_ERROR):
        return({
            ...state,
            error: action.payload
        }) 
            
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  X an array of smurfs
//  X a boolean indicating if the app is loading
//  X a string indicating a possible error message

//2. X Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.