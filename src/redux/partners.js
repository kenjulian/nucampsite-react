//import { PARTNERS } from "../shared/partners";

//this is now receiving partners data from the action and not the module
//*TO BE CHECKED* i think the thunks in actionCreators.js is connecting the json data via url:localhost, payload?
import * as ActionTypes from './ActionTypes';

//all reducers take 2 parameters:
    //previousState- state currently in the store thats set to be changed by this reducer
    //action object- reducer will take action type and update state accordingly
export const Partners = (state= PARTNERS, action ) => {
    switch(action.type) {
        case ActionTypes.ADD_PARTNERS:
            return {...state, isLoading: false, errMess: null, partners: action.payload};
        case ActionTypes.PARTNERS_LOADING:
            return {...state, isLoading: true, errMess: null, partners: []};
        case ActionTypes.PARTNERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        default:
            return state;
    }
}