import { PROMOTIONS } from "../shared/promotions";

//all reducers take 2 parameters:
    //previousState- state currently in the store thats set to be changed by this reducer
    //action object- reducer will take action type and update state accordingly
export const Promotions = (state= PROMOTIONS, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}