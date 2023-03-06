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


export default function Home() {



    const [center, setCenter] = useState([40.277635, -74.005053])
    const [zoom, setZoom] = useState(18)
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    var index = 1;
    var count = 0
    const dispatch = useDispatch()
    const sensorstate =  useSelector(state=>state.getAllSensorsReducer)
    const roomonestate = useSelector(state=>state.getAllRoomOneReducer)
    const { roomone } = roomonestate
    const roomtwostate = useSelector(state=>state.getAllRoomTwoReducer)
    const { roomtwo } = roomtwostate
    const roomthreestate = useSelector(state=>state.getAllRoomThreeReducer)
    const { roomthree } = roomthreestate
    const roomfourstate = useSelector(state=>state.getAllRoomFourReducer)
    const {  roomfour } = roomfourstate
    const roomfivestate = useSelector(state=>state.getAllRoomFiveReducer)
    const {  roomfive } = roomfivestate
    const { error, loading, sensors } = sensorstate
    useEffect(() => {
        dispatch(getAllSensors())
        dispatch(getAllRoomOne())
        dispatch(getAllRoomTwo())
        dispatch(getAllRoomThree())
        dispatch(getAllRoomFour())
        dispatch(getAllRoomFive())
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
          return <Overlay anchor={[parseFloat(sensor.latitude), parseFloat(sensor.longitude)]} >
            <p className="annotation">{count}</p>
          </Overlay>
    
        })}
    </Map>
</div>

    )
}

