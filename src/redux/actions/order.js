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
        movieId: data.movieId
    }
}

export const selectTime = (time) => ({
    type: 'SELECT_TIME',
    time
})

export const selectSeat = (seats) => ({
    type: 'SELECT_SEAT',
    seats
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