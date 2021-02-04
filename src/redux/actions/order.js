export const setOrder = (data) => {
    console.log('DATA NYA ADALAH')
    console.log(data)
    return {
        type: 'SET_ORDER',
        movieTitle: data.movieTitle,
        cinemaName: data.cinemaName,
        showTimeDate: data.showTimeDate,
        cinemaPoster: data.cinemaPoster,
        cinemaCity: data.cinemaCity,
        ticketCount: data.ticketCount,
        pricePerSeat: data.pricePerSeat
    }
}

export const selectTime = (time) => ({
    type: 'SELECT_TIME',
    time
})