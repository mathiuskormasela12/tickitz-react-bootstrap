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
    time: null   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER': {
            return {
                ...state,
                movieTitle: action.data.movieTitle,
                cinemaName: action.data.cinemaName,
                showTimeDate: action.data.showTimeDate,
                ticketTime: action.data.ticketTime,
                cinemaPoster: action.data.cinemaPoster,
                cinemaCity: action.data.cinemaCity,
                ticketCount: action.data.ticketCount
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer