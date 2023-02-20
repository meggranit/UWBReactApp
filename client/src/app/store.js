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
import { getAllSensorsReducer } from '../reducers/sensorsReducer'
import { getAllRoomsReducer } from '../reducers/roomsReducer'
import { configurePusher } from 'pusher-redux';

const finalReducer = combineReducers({
    getAllPhonesReducer: getAllPhonesReducer,
    getAllRoomOneReducer: getAllRoomOneReducer,
    getAllRoomTwoReducer: getAllRoomTwoReducer,
    getAllRoomThreeReducer: getAllRoomThreeReducer,
    getAllRoomFourReducer: getAllRoomFourReducer, 
    getAllRoomFiveReducer: getAllRoomFiveReducer,
    getAllSensorsReducer: getAllSensorsReducer,
    getAllRoomsReducer: getAllRoomsReducer
})

const initialState = {
    
}

const composeEnhancers = composeWithDevTools({})

const store = legacy_createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

configurePusher(store , "df84289eebfca65c0b86");

export default store