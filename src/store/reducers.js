import { combineReducers } from 'redux';
import { requestReducer as requests } from '../store/Request/reducer';
import { datesReducer as dates } from '../store/Dates/reducer';
import { commentReducer as comment } from '../store/Comment/reducer';
import { availableDaysReducer as availableDays } from '../store/AvailableDays/reducer';
import { personsReducer as persons } from '../store/Persons/reducer';

export const rootReducer = combineReducers({
    requests,
    dates,
    comment,
    availableDays,
    persons
});