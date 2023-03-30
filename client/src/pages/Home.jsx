import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomOne from '../components/RoomOne';
import RoomTwo from '../components/RoomTwo';
import RoomThree from '../components/RoomThree';
import RoomFour from '../components/RoomFour';
import RoomFive from '../components/RoomFive';
import Clock from '../components/Clock';
import Stack from 'react-bootstrap/Stack';
import PhoneList from "../components/Phones";
import { getAllPhones } from "../actions/phoneActions";
import RoomCount from "../components/RoomCount";
import SingleRoom from "../components/SingleRoom";
import { getAllSensors } from '../actions/sensorActions';
import Pusher from 'pusher-js'
import Loading from '../components/Loading';
import Error from '../components/Error';


export default function Home() {
    const dispatch = useDispatch()
    const sensorstate = useSelector(state=>state.getAllSensorsReducer)
    const {error , loading , sensors} = sensorstate

    useEffect(() => {
        //dispatch(getRoomByID(roomID))
        dispatch(getAllSensors())
        const pusher = new Pusher('df84289eebfca65c0b86', {
          cluster: 'us2'
        });
        const channel1 = pusher.subscribe('channel_room1');
        channel1.bind('event_room1', function(data) {
          //dispatch(getRoomByID(roomID));
          dispatch(getAllSensors())
        });
        return (() => {
          pusher.unsubscribe('channel_room1')
        })
    }, [])
    
    return (
        <div className="home-layout">
             {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
    
           
           
        <div className="align-rooms">
       <div className="rooms-main-div">
            <div className="rooms-row rooms-top-row">
        {sensors && sensors.map(sensor => {
            return  <SingleRoom roomID={sensor.roomID} />
        })}
       </div>
       </div>
       </div>
       <div>
        <Clock></Clock>
        </div>
        </div>
    )
}

