import { commentActionTypes } from './actions';

const initialState = null;

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentActionTypes.SET_COMMENT:
            return action.comment;
        default:
            return state;
    }
}