import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRoomTwo } from '../actions/roomTwoActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from './Loading';
import Error from './Error';
import Pusher from 'pusher-js'

function RoomTwoLogs() {

  const dispatch = useDispatch()
    const roomtwostate = useSelector(state=>state.getAllRoomTwoReducer)
    const { error, loading, roomtwo } = roomtwostate
    useEffect(() => {
        dispatch(getAllRoomTwo())
        const pusher = new Pusher('df84289eebfca65c0b86', {
          cluster: 'us2'
        });
        const channel2 = pusher.subscribe('channel_room2');
        channel2.bind('event-room2', function(data) {
          alert(JSON.stringify(data));
        });
        return (() => {
          pusher.unsubscribe('channel_room2')
        })
    }, [])

  return (
    <div>
        <h1 className='selected-tab-heading'>Room Two</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
       <p></p>
    <ListGroup as="ol" >
      {roomtwo && roomtwo.map(roomData => {
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

export default RoomTwoLogs;