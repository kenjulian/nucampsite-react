import * as ActionTypes from './ActionTypes';

//all reducers take 2 parameters:
    //previousState- state currently in the store thats set to be changed by this reducer
    //action object- reducer will take action type and update state accordingly
export const Promotions = (state= {isLoading: true, 
                                   errMess: null, 
                                   promotions: []}, action ) => {
    switch(action.type) {

        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};

        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
            
        default:
            return state;
    }
}