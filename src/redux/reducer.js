import {CAMPSITES} from '../shared/campsites';
import {COMMENTS} from '../shared/comments';
import {PARTNERS} from '../shared/partners';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
}
//default function parameter, if no state is passed in, use initialState
export const Reducer = (state = initialState, action) => {
    return state;
};