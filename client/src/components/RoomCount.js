import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRoomOne } from '../actions/roomOneActions';
import { getAllRoomTwo } from '../actions/roomTwoActions';
import { getAllRoomThree } from '../actions/roomThreeActions';
import { getAllRoomFour } from '../actions/roomFourActions';
import { getAllRoomFive } from '../actions/roomFiveActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from './Loading';
import Error from './Error';

function RoomCount() {

  const dispatch = useDispatch()
 
    const roomonestate = useSelector(state=>state.getAllRoomOneReducer)
    const { error, loading, roomone } = roomonestate
    const roomtwostate = useSelector(state=>state.getAllRoomTwoReducer)
    const { roomtwo } = roomtwostate
    const roomthreestate = useSelector(state=>state.getAllRoomThreeReducer)
    const { roomthree } = roomthreestate
    const roomfourstate = useSelector(state=>state.getAllRoomFourReducer)
    const {  roomfour } = roomfourstate
    const roomfivestate = useSelector(state=>state.getAllRoomFiveReducer)
    const {  roomfive } = roomfivestate
    useEffect(() => {
        dispatch(getAllRoomOne())
        dispatch(getAllRoomTwo())
        dispatch(getAllRoomThree())
        dispatch(getAllRoomFour())
        dispatch(getAllRoomFive())
    }, [])

  return (
    <div>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
       <p></p>
       <div className="align-rooms">
       <div className="rooms-main-div">
            <div className="rooms-row rooms-top-row">
                <div className="room room-top">
                    <div className="room-content">
                        <p className="room-num">Room One</p>
                        <h1 className="room-count">{roomone.length}</h1>
                    </div>
                </div>
                <div className="room room-top">
                <div className="room-content">
                        <p className="room-num">Room Two</p>
                        <h1 className="room-count">{roomtwo.length}</h1>
                    </div>
                </div>
                <div className="room room-top">
                <div className="room-content">
                        <p className="room-num">Room Three</p>
                        <h1 className="room-count">{roomthree.length}</h1>
                    </div>
                </div>
            </div>
            <div className="rooms-row rooms-bottom-row">
                <div className="room room-bottom">
                <div className="room-content">
                        <p className="room-num">Room Four</p>
                        <h1 className="room-count">{roomfour.length}</h1>
                    </div>
                </div>
                <div className="room room-bottom">
                <div className="room-content">
                        <p className="room-num">Room Five</p>
                        <h1 className="room-count">{roomfive.length}</h1>
                    </div>
                </div>
            </div>
        </div>
       </div>
       
    </div>
  );
}

export default RoomCount;