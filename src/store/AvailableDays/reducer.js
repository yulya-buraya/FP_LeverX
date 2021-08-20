import { availableDaysActionTypes } from './actions';

const initialState = 147;

export const availableDaysReducer = (state = initialState, action) => {
    switch (action.type) {
        case availableDaysActionTypes.INCREMENT_DAYS:
            return state + action.value;
        case availableDaysActionTypes.DECREMENT_DAYS:
            return state - action.value;
        default:
            return state;
    }
}

