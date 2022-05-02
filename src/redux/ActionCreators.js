import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        // short hand property syntax
        campsiteId,
        rating,
        author,
        text
    }
});

//redux thunk enables this syntax bc its a middleware
export const fetchCampsites = () => dispatch => {
    //occuring after dispatch and before it reaches the reducer
    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES))
    }, 2000);
};

//this is not a thunk; it's not being intercepted, this will go straight to the reducer
export const campsitesLoading = () => ({
    //no payload here
    type:ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
})