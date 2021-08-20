export const availableDaysActionTypes = {
    INCREMENT_DAYS: 'AVAILABLE_DAYS.INCREMENT',
    DECREMENT_DAYS: 'AVAILABLE_DAYS.DECREMENT'
}

export const availableDaysAction = {
    incrementDays: (value) => ({
        type: availableDaysActionTypes.INCREMENT_DAYS,
        value
    }),
    decrementDays: (value) => ({
        type: availableDaysActionTypes.DECREMENT_DAYS,
        value
    })
};