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
import SingleRoom from './SingleRoom';
import Pusher from 'pusher-js'
import { getAllRooms, getRoomByID } from '../actions/roomActions';
import { getAllSensors } from '../actions/sensorActions';

function RoomCount() {

  const dispatch = useDispatch()

    const sensorstate =  useSelector(state=>state.getAllSensorsReducer)
    const { sensors } = sensorstate
    const allroomsstate =  useSelector(state=>state.getAllRoomsReducer)
    const {error , loading , allrooms } = allroomsstate
    //const roomstate = useSelector(state=>state.getRoomByIDReducer)
   // const {  room } = roomstate
    
    const numSensors = sensors.length
    /*
    var roomData1 = []
    var roomData2 = []
    for (let index = 0; index < numSensors; index++) {
      roomData1[index] = room
      
    }
    */
    //console.log(numSensors)
    var index = 1;
    var count = 0;
    

    //create associative array, for each sensor create key that is same as roomID
    //call getRoomByID() with roomID from sensor
    //fill associative array with rooms under respective roomID
    //ex: {"1": {all room1 data} , "2": {all room2 data}}
  


    useEffect(() => {
        dispatch(getAllSensors())
        dispatch(getAllRooms())
        
        //dispatch(getRoomByID('1'))
        //const room2 = dispatch(getRoomByID('2'))
        
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
       
       <div className="align-rooms">
       <div className="rooms-main-div">
       
       
            <div className="rooms-row rooms-top-row">
              {sensors && sensors.map(sensor => {

//const count = getRoomByID(sensor.roomID)



                return <div className="room room-top">
                <div className="room-content">
                    <p className="room-num">Room {sensor.roomID}</p>
                    <h1 className="room-count">{count}</h1>
                   
                </div>
            </div>

              }) }
              
            </div>
            
        </div>
       </div>
       
    </div>
  );
}

export default RoomCount;