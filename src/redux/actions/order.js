export const setOrder = (data) => {
    console.log('Dari DB')
    console.log(data)
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