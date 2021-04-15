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
    movieId: null,
    fullName: null,
    phone: null,
    email: null,
    isPersonalInfoValid: false,
    message: null,
    messageType: null,
    category: null,
    timeId: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER': {
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
                movieId: action.movieId,
                category: action.category
            }
        }

        case 'SELECT_TIME' : {
            return {
                ...state,
                ticketTime: action.time,
                timeId: action.timeId,
            }
        }

        case 'SELECT_SEAT' : {
            return {
                ...state,
                seats: action.seats
            }
        }

        case 'REMOVE_SEAT' : {
            return {
                ...state,
                seats: []
            }
        }

        case 'SET_TICKET_COUNT' : {
            return {
                ...state,
                ticketCount: Number(state.seats.length)
            }
        }

        case 'SET_TOTAL_PAYMENT' : {
            return {
                ...state,
                totalPayment: state.ticketCount * state.pricePerSeat
            }
        }

        case 'SET_PAYMENT_METHOD' : {
            return {
                ...state,
                paymentMethod: action.paymentMethod
            }
        }

        case 'REMOVE_PAYMENT_METHOD' : {
            return {
                ...state,
                paymentMethod: null
            }
        }

        case 'SET_PERSONAL_INFO' : {
            return {
                ...state,
                [action.name]: action.value
            }
        }

        case 'SET_PERSONAL_INFO_VALID' : {
            return {
                ...state,
                isPersonalInfoValid: action.isPersonalInfoValid
            }
        }

        case 'SET_MESSAGE' : {
            return {
                ...state,
                message: action.message,
                messageType: action.messageType
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