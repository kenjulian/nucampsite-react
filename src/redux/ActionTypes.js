export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';

export const ADD_CAMPSITES = 'ADD_CAMPSITES';
//dispatched when campsites data is received from the server can be safely added to the state
export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';//loading campsites data as it makes async request
export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';
//server request fail, unable to load data
//this action will let the redux store know that, so it can update to show an err message


export const PROMOTIONS_LOADING = 'PROMOTIONS_LOADING';
export const ADD_PROMOTIONS = 'ADD_PROMOTIONS';
export const PROMOTIONS_FAILED = 'PROMOTIONS_FAILED';

export const ADD_PARTNERS = 'ADD_PARTNERS';
export const PARTNERS_LOADING = 'PARTNERS_LOADING';
export const PARTNERS_FAILED = 'PARTNERS_FAILED';