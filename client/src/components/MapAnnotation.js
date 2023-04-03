
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
import Pusher from 'pusher-js'
import { getAllRooms, getRoomByID } from '../actions/roomActions';
import { getAllSensors } from '../actions/sensorActions';
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps"

function MapAnnotation ({ roomID , long , lat })  {

  const dispatch = useDispatch()

    const roomstate = useSelector(state=>state.getAllRoomsReducer)
    const { error , loading , rooms } = roomstate
    
    
   
    const count = rooms.length
    var newRooms = []
   
    {rooms.filter(room => room.roomID.includes(roomID)).map(selectedRoom => (
                    newRooms.push(selectedRoom.roomID)
        ))}

    
  


    useEffect(() => {
      dispatch(getAllRooms())
    
       
        const pusher = new Pusher('df84289eebfca65c0b86', {
            cluster: 'us2'
          });
          const channel1 = pusher.subscribe('channel_room1');
          channel1.bind('event_room1', function(data) {
            dispatch(getAllRooms());
           
          });
          
          return (() => {
            pusher.unsubscribe('channel_room1')
           
          })
    }, [])

  return (
    <div>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
       <p></p>
    
       <Overlay anchor={[parseFloat(lat), parseFloat(long)]} >
            <p className="annotation">{newRooms.length}</p>
          </Overlay>


         

           
              
            </div>
            
      
  );
}

export default MapAnnotation;