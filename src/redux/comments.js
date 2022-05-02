import { COMMENTS } from "../shared/comments";
import * as ActionTypes from './ActionTypes'

//all reducers take 2 parameters:
    //previousState- state currently in the store thats set to be changed by this reducer
    //action object- reducer will take action type and update state accordingly
export const Comments = (state= COMMENTS, action ) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;//this is the payload object from ADD_COMMENT
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}
//Add Comment example:
//this reducer will update its part of the state(comments) when addComment is dispatched
//then export this updated state to main component to be used as props 
//use mapDispatchToProps so we can pass it down
    //pass it down as props to CampsiteInfo
    //update CampsiteInfoComponent.js to initiate the action ...this.props.addComment
