export const setOrder = (data) => {
    return {
        type: 'SET_ORDER',
        movieTitle: data.movieTitle,
        cinemaName: data.cinema,
        showTimeDate: data.showTimeDate,
        cinemaPoster: data.cinemaPoster,
        cinemaCity: data.cinemaCity,
        ticketCount: data.ticketCount,
        pricePerSeat: data.pricePerSeat,
        showTimeId: data.showTimeId,
        cinemaId: data.cinemaId,
        movieId: data.movieId,
        category: data.category
    }
}

export const selectTime = (time, timeId) => ({
    type: 'SELECT_TIME',
    time,
    timeId,
})

export const selectSeat = (seats) => ({
    type: 'SELECT_SEAT',
    seats
})

export const removeSeat = () => ({
    type: 'REMOVE_SEAT'
})

export const setTicketCount = () => ({
    type: 'SET_TICKET_COUNT'
})

export const setTotalPayment = () => ({
    type: 'SET_TOTAL_PAYMENT'
})

export const setPaymentMethod = (paymentMethod) => ({
    type: 'SET_PAYMENT_METHOD',
    paymentMethod
})

export const removePaymentMethod = () => ({
    type: 'REMOVE_PAYMENT_METHOD'
})

export const setPersonalInfo = (name, value) => ({
    type: 'SET_PERSONAL_INFO',
    value,
    name
})

export const setPersonalInfoValid = (value) => ({
    type: 'SET_PERSONAL_INFO_VALID',
    isPersonalInfoValid: value
})

export const setMessage = (message, type) => ({
    type: 'SET_MESSAGE',
    message,
    messageType: type
})
