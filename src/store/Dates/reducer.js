import { datesActionTypes } from './actions';

const initialState = {
    startDate: null, endDate: null, dayCount: null
};

export const datesReducer = (state = initialState, action) => {
    switch (action.type) {
        case datesActionTypes.SET_DATES:
            return { ...action.dates };
        default:
            return state;
    }
}