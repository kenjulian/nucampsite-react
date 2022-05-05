
import * as ActionTypes from './ActionTypes'

//all reducers take 2 parameters:
    //previousState- state currently in the store thats set to be changed by this reducer
    //action object- reducer will take action type and update state accordingly
export const Comments = (state= {errMess: null, comments: []}, action ) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;//this is the payload object from ADD_COMMENT
            
            //return state.concat(comment);//comment obj added to an array of existing comment objects
            return {...state, comments: state.comments.concat(comment)};//updates current state
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
