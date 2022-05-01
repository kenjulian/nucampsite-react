import {createStore, combineReducers} from 'redux';
import {Campsites} from './campsites';
import {Comments} from './comments';
import {Partners} from './partners';
import {Promotions} from './promotions'

export const ConfigureStore = () => {
    const store = createStore(
        //createStore can only take in 1 reducer; so combine reducers using  combineReducers from redux
        // Reducer,
        // initialState
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })

    );

    return store;
}