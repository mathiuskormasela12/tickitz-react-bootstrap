const initialState = {
    userId: null,
    showTimeDate: null,
    ticketTime: null,
    cinemaName: null,
    cinemaPoster: null,
    cinemaCity: null,
    ticketCount: 0,
    totalPayment: 0,
    pricePerSeat: 0,
    paymentMethod: null,
    seats: [],
    movieTitle: null,
    showTimeId: null,
    cinemaId: null,
    movieId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER': {
            console.log('INI PRICENYA', action.pricePerSeat)
            return {
                ...state,
                movieTitle: action.movieTitle,
                cinemaName: action.cinemaName,
                showTimeDate: action.showTimeDate,
                cinemaPoster: action.cinemaPoster,
                cinemaCity: action.cinemaCity,
                ticketCount: action.ticketCount,
                pricePerSeat: action.pricePerSeat,
                showTimeId: action.showTimeId,
                cinemaId: action.cinemaId,
                movieId: action.movieId
            }
        }

        case 'SELECT_TIME' :
            return {
                ...state,
                ticketTime: action.time
            }

        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer