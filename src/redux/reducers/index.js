import { combineReducers } from 'redux'
import reducer from './reducer'
import order from './order'

const reducers = combineReducers({
    redux: reducer,
    order
})

export default reducers