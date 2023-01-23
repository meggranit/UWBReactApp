import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { legacy_createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPhonesReducer } from '../reducers/phonesReducer'
import { getAllRoomOneReducer } from '../reducers/roomOneReducer'
import { getAllRoomTwoReducer } from '../reducers/roomTwoReducer'
import { getAllRoomThreeReducer } from '../reducers/roomThreeReducer'
import { getAllRoomFourReducer } from '../reducers/roomFourReducer'
import { getAllRoomFiveReducer } from '../reducers/roomFiveReducer'

const finalReducer = combineReducers({
    getAllPhonesReducer: getAllPhonesReducer,
    getAllRoomOneReducer: getAllRoomOneReducer,
    getAllRoomTwoReducer: getAllRoomTwoReducer,
    getAllRoomThreeReducer: getAllRoomThreeReducer,
    getAllRoomFourReducer: getAllRoomFourReducer, 
    getAllRoomFiveReducer: getAllRoomFiveReducer
})

const initialState = {
    
}

const composeEnhancers = composeWithDevTools({})

const store = legacy_createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store