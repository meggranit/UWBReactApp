import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRoomOne } from '../actions/roomOneActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from './Loading';
import Error from './Error';
import Pusher from 'pusher-js'

function RoomOneLogs() {

  const dispatch = useDispatch()
    const roomonestate = useSelector(state=>state.getAllRoomOneReducer)
    const { error, loading, roomone } = roomonestate
    useEffect(() => {
        dispatch(getAllRoomOne())
        const pusher = new Pusher('df84289eebfca65c0b86', {
          cluster: 'us2'
        });
        const channel1 = pusher.subscribe('channel_room1');
        channel1.bind('event-room1', function(data) {
          alert(JSON.stringify(data));
        });
        return (() => {
          pusher.unsubscribe('channel_room1')
        })
    }, [])

  return (
    <div>
        <h1 className='selected-tab-heading'>Room One</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
       <p></p>
    <ListGroup as="ol" >
      {roomone && roomone.map(roomData => {
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

export default RoomOneLogs;