import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps"
import { getAllSensors } from '../actions/sensorActions';
import { getAllRoomOne } from '../actions/roomOneActions';
import { getAllRoomTwo } from '../actions/roomTwoActions';
import { getAllRoomThree } from '../actions/roomThreeActions';
import { getAllRoomFour } from '../actions/roomFourActions';
import { getAllRoomFive } from '../actions/roomFiveActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Pusher from 'pusher-js'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getAllRooms } from "../actions/roomActions";
import MapAnnotation from '../components/MapAnnotation';
import { getRoomByID } from "../actions/roomActions";


export default function Home() {



    const [center, setCenter] = useState([40.277635, -74.005053])
    const [zoom, setZoom] = useState(18)
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    var index = 1;
    var count = 0
    const dispatch = useDispatch()
    const sensorstate =  useSelector(state=>state.getAllSensorsReducer)
    
    const { error, loading, sensors } = sensorstate

    const roomstate = useSelector(state=>state.getAllRoomsReducer)
    const rooms = roomstate
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);



    useEffect(() => {
        dispatch(getAllSensors())
        dispatch(getAllRooms())
      
        const pusher = new Pusher('df84289eebfca65c0b86', {
            cluster: 'us2'
          });
          const channel1 = pusher.subscribe('channel_room1');
          channel1.bind('event_room1', function(data) {
            dispatch(getAllRooms());
           
            //alert(JSON.stringify(data));
          });
          
          return (() => {
            pusher.unsubscribe('channel_room1')
           
          })
    }, [])


   
    return (
      <div>
 <div className="map">
    <Map 
      height={500}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    >
      <ZoomControl />
      {sensors && sensors.map(sensor=> {
       
          return <Overlay anchor={[parseFloat(sensor.latitude), parseFloat(sensor.longitude)]} >
          <p className="annotation">{roomCount(sensor.roomID)}</p>
        </Overlay>
          
    
        })}
    </Map>
    
</div>


  </div>
    )
}

function roomCount(roomID ) {

 

 
  
  
  return roomID
}
