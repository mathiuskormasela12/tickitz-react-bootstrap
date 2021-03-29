const initialState = {
  message: null,
  success: false,
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE': {
      return {
        ...state,
        message: action.message,
        success: action.success,
      }
    }

    case 'CLOSE_ALERT': {
      return {
        ...state,
        message: null,
        success: false,
      }
    }

    case 'RESET_MESSAGE': {
      return {
        ...state,
        message: null,
        success: false,
      }
    }
  
    default: {
      return {
        ...state,
      }
    }
  }
}

export default messageReducer;