//import { CAMPSITES } from "../shared/campsites";
//are now receiving campsites data from the action and not the module
import * as ActionTypes from './ActionTypes';

//all reducers take 2 parameters:
    //previousState- state currently in the store thats set to be changed by this reducer
    //action object- reducer will take action type and update state accordingly
export const Campsites = (state= {
    isLoading: true,
    errMess: null,
    campsites: []
}, action ) => {
    switch(action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload }
        default:
            return state;
    }
};