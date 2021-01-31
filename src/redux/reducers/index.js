import { combineReducers } from 'redux'
import reducer from './reducer'

const reducers = combineReducers({
    redux: reducer
})

export default reducers