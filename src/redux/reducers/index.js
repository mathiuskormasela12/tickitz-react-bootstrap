import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage'
import reducer from './reducer'
import order from './order'
import auth from './auth'
import message from './message'
import loading from './loading'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet, 
    blacklist: ['redux', 'order', 'message', 'loading']
}

const authPersistConfig = {
    key: 'auth',
    storage,
    stateReconciler: hardSet,
}

const reducers = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
    redux: reducer,
    message,
    loading,
    order
})

export default persistReducer(persistConfig, reducers)