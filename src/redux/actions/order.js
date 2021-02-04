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
        showTimeId: data.showTimeId
    }
}

export const selectTime = (time) => ({
    type: 'SELECT_TIME',
    time
})