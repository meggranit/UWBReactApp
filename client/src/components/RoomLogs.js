import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRooms , getRoomByID } from '../actions/roomActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from './Loading';
import Error from './Error';
import Pusher from 'pusher-js'
import { subscribe, unsubscribe } from 'pusher-redux';


function RoomLogs({ roomID }) {

  const dispatch = useDispatch()

    const roomstate = useSelector(state=>state.getAllRoomsReducer)
    const { error, loading, rooms } = roomstate
    
  

    useEffect(() => {
        //dispatch(getRoomByID(roomID))
        dispatch(getAllRooms())
        const pusher = new Pusher('df84289eebfca65c0b86', {
          cluster: 'us2'
        });
        const channel1 = pusher.subscribe('channel_room1');
        channel1.bind('event_room1', function(data) {
          //dispatch(getRoomByID(roomID));
          dispatch(getAllRooms())
        });
        return (() => {
          pusher.unsubscribe('channel_room1')
        })
    }, [])

  return (
    <div>
        <h1 className='selected-tab-heading'>Room {roomID}</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
       <p></p>
    
      
         <ListGroup as="ol" >
            {rooms && rooms.map(room=> {
                if(room.roomID == roomID){

                
                return <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                 <p>Latitude: {room.lat}</p>
                 <p>Longitude: {room.long}</p>
                 <p>Device ID: {room.deviceID}</p>
                </div>
                <div>
                    <p>Distance: {room.distance}</p>
                    <p>Time: {room.time}</p>
                </div>
              </ListGroup.Item>
                }
            })}
            
  </ListGroup>
      
      

  
    </div>
  );
}

export default RoomLogs;