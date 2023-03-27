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

function RoomCount() {

  const dispatch = useDispatch()

    const sensorstate =  useSelector(state=>state.getAllSensorsReducer)
    const { sensors } = sensorstate
    const roomstate = useSelector(state=>state.getRoomByIDReducer)
    const room = roomstate
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
    var index = 1;
    var count = 0;
    useEffect(() => {
        dispatch(getAllRoomOne())
        dispatch(getAllRoomTwo())
        dispatch(getAllRoomThree())
        dispatch(getAllRoomFour())
        dispatch(getAllRoomFive())
        dispatch(getAllRooms())
        dispatch(getAllSensors())
        dispatch(getRoomByID('2'))
        {sensors && sensors.map(sensor => {
          dispatch(getRoomByID(sensor.roomID))
        })
         
        }
        const pusher = new Pusher('df84289eebfca65c0b86', {
            cluster: 'us2'
          });
          const channel1 = pusher.subscribe('channel_room1');
          channel1.bind('event_room1', function(data) {
            dispatch(getAllRoomOne());
            dispatch(getAllRoomTwo());
            dispatch(getAllRoomThree());
            //alert(JSON.stringify(data));
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

if(index == 1){
  count = roomone.length
  } else if(index ==2 ){
    count = roomtwo.length
  } else if(index == 3){
    count = roomthree.length
  } else {
    count = 0
  }
  index++

                return <div className="room room-top">
                <div className="room-content">
                    <p className="room-num">Room {sensor.roomID}</p>
                    <h1 className="room-count">{count}</h1>
                </div>
            </div>

              }) }
              
            </div>
            {/*

            
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
*/}
        </div>
       </div>
       
    </div>
  );
}

export default RoomCount;