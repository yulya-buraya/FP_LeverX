import { ACTION_TYPES } from './actions';

const initialState = null;

const approver = {
    id: 1,
    comment: "Have a nice vacation!"
};

export const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_REQUEST:
            const year = new Date(action.request.dateCreate).getFullYear();
            if (state == null) {
                state = {};
            }
            if (!(state[year] instanceof Array)) {
                state[year] = [];
            }
            action.request.id = state[year].length;
            action.request.approver = approver;
            state[year].push(action.request);
            state[year] = state[year].sort((a, b) => {
                if (a.type < b.type) return 1;
                if (a.type > b.type) return -1;
                return 0;
            });
            return { ...state };
        case ACTION_TYPES.UPDATE_REQUEST:
            let id = state[action.year].findIndex(request => request.id === action.request.id);
            state[action.year][id] = action.request;
            console.log(state);
            return { ...state };
        case ACTION_TYPES.REMOVE_REQUEST:
            let requestId = state[action.year].findIndex(request => request.id === action.id);
            state[action.year].splice(requestId, 1);
            return { ...state };
        default:
            return state;
    }
}