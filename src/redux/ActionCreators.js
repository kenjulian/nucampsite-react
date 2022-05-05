import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';//linked json server via localhost/3001 url


//CAMPSITES:

//This is a GET req to the server
//redux thunk enables this syntax bc its a middleware
export const fetchCampsites = () => dispatch => {
    //occuring after dispatch and before it reaches the reducer
    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
            .then(response => {
                if (response.ok) {
                    return response;
                } else {//caught by catch block below; server gave a bad response such as a 404
                    const error = new Error(`Error ${response.status}: ${response.statusText}`)
                    error.response = response;
                    throw error;
                }
            },
            error => {//rejected promise, no response from the server at all
                const errMess = new Error(error.message);
                throw errMess;
            }
            )
            .then(response => response.json())//if fetch is successful it converts json data to js object
            .then(campsites => dispatch(addCampsites(campsites)))//dispatch addCampsites w/ js obj(campsites)
            .catch(error => dispatch(campsitesFailed(error.message)));//catches throw
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
});


//COMMENTS:

//This is a GET req to the server
export const fetchComments = () => dispatch => {

    return fetch(baseUrl + 'comments')//send fetch request to json server which is runnning at the address stored in baseUrl
            .then(response => {
                if (response.ok) {
                    return response;
                } else {//caught by catch block below; server gave a bad response such as a 404
                    const error = new Error(`Error ${response.status}: ${response.statusText}`)
                    error.response = response;
                    throw error;
                }
            },
            error => {//rejected promise, no response from the server at all
                const errMess = new Error(error.message);
                throw errMess;
            }
            )
            .then(response => response.json())
            .then(comments => dispatch(addComment(comments)))
            .catch(error => dispatch(commentsFailed(error.message)));
            //goes through the reducer to be dispatched to the store
            //in the reducer, if action type is addComment it will {...state, fetched comment payload}
};
 export const commentsFailed = errMess => ({
     type:ActionTypes.COMMENTS_FAILED,
     payload: errMess
 });

 export const addComments = comments => ({
     type: ActionTypes.ADD_COMMENTS,
     payload: comments
 });

 export const addComment = comment => ({
     type: ActionTypes.ADD_COMMENT,
     payload: comment
 })
 
 //This is a POST req to the server
 //this is a thunk and no longer a typical action bc it needs to asynchronusly reach the server
 export const postComment = (campsiteId, rating, author, text) => dispatch =>{
    
    const newComment = {
        // short hand property syntax
        campsiteId,
        rating,
        author,
        text
    }
    //add a date to comment object; generated right here 
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {//caught by catch block below; server gave a bad response such as a 404
            const error = new Error(`Error ${response.status}: ${response.statusText}`)
            error.response = response;
            throw error;
        }
    },
    error => {
        throw error;//throw error to the next catch block
    })
    .then(response => response.json())//convert it back to javascript
    .then(response => dispatch(addComment(response)))//dispatch response data (comment input from end user) to the reducer to the store
    .catch(error => {
        console.log('post comment', error.message);
        alert('Your comment could not be posted\nError: ' + error.message);
    });
};

 //PROMOTIONS:

 //this is a GET req to the server
 export const fetchPromotions = () => dispatch => {
    //occuring after dispatch and before it reaches the reducer
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
            //the fetchedd data going through the .thens will be promotions 
            .then(response => {
                if (response.ok) {
                    return response;
                } else {//caught by catch block below; server gave a bad response such as a 404
                    const error = new Error(`Error ${response.status}: ${response.statusText}`)
                    error.response = response;
                    throw error;
                }
            },
            error => {//rejected promise, no response from the server at all
                const errMess = new Error(error.message);
                throw errMess;
            }
            )
            .then(response => response.json())//if fetch is successful it converts json data to js object
            .then(promotions => dispatch(addPromotions(promotions)))//dispatch addPromotions w/ js obj(promotions)
            .catch(error => dispatch(promotionsFailed(error.message)))
};

export const promotionsLoading = () => ({
    //no payload here
    type:ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});
