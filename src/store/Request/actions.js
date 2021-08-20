export const ACTION_TYPES = {
    ADD_REQUEST: 'REQUEST.ADD_REQUEST',
    REMOVE_REQUEST: 'REQUEST.REMOVE_REQUEST',
    UPDATE_REQUEST: 'REQUEST.UPDATE_REQUEST'
}

export const requestAction = {
    addRequest: (request) => ({
        type: ACTION_TYPES.ADD_REQUEST,
        request
    }),
    removeRequest: (year, id) => ({
        type: ACTION_TYPES.REMOVE_REQUEST,
        year,
        id
    }),
    updateRequest: (year, request) => ({
        type: ACTION_TYPES.UPDATE_REQUEST,
        year,
        request
    })
}