export const datesActionTypes = {
    SET_DATES: 'DATES.SET_DATES',
}

export const datesAction = {
    setDates: (dates) => ({
        type: datesActionTypes.SET_DATES,
        dates
    })
}