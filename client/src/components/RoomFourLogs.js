import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRoomFour } from '../actions/roomFourActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from './Loading';
import Error from './Error';

function RoomFourLogs() {

  const dispatch = useDispatch()
    const roomfourstate = useSelector(state=>state.getAllRoomFourReducer)
    const { error, loading, roomfour } = roomfourstate
    useEffect(() => {
        dispatch(getAllRoomFour())
    }, [])

  return (
    <div>
        <h1 className='selected-tab-heading'>Room Four</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
       <p></p>
    <ListGroup as="ol" >
      {roomfour && roomfour.map(roomData => {
        return <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <p>Latitude: {roomData.lat}</p>
         <p>Longitude {roomData.long}</p>
         <p>Device ID: {roomData.deviceID}</p>
        </div>
        <div>
            <p>Distance: {roomData.distance}</p>
            <p>Time: {roomData.time}</p>
        </div>
      </ListGroup.Item>

      })}
      

    </ListGroup>
    </div>
  );
}

export default RoomFourLogs;