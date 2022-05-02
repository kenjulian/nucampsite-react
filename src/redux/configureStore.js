import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Campsites} from './campsites';
import {Comments} from './comments';
import {Partners} from './partners';
import {Promotions} from './promotions';
import {InitialFeedback} from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        //createStore can only take in 1 reducer; so combine reducers using  combineReducers from redux
        // Reducer,
        // initialState
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        //logger is automatically implemented w/o further code
        applyMiddleware(thunk, logger)  

    );

    return store;
}