import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RoomOneLogs from '../components/RoomOneLogs';
import RoomTwoLogs from '../components/RoomTwoLogs';
import RoomThreeLogs from '../components/RoomThreeLogs';
import RoomFourLogs from '../components/RoomFourLogs';
import RoomFiveLogs from '../components/RoomFiveLogs';
import PhoneLogs from '../components/PhoneLogs';
import SensorLogs from '../components/SensorLogs';
import RoomLogs from '../components/RoomLogs';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSensors } from '../actions/sensorActions';
import Pusher from 'pusher-js'


function Logs() {
    const [key, setKey] = useState('phone');
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
        <div className='logs-layout'>
            {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        <div>
           
<div>
<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
         <Tab eventKey="phone" title="Phone">
      <div className='logs-spacing'>
                <PhoneLogs />
            </div>
      </Tab>

      <Tab eventKey="sensors" title="Sensors">
      <div className='logs-spacing'>
                <SensorLogs />
            </div>
      </Tab>
      
        {sensors && sensors.map(sensor => {
            return <Tab eventKey={sensor.roomID} title= {sensor.roomID} >
            <div className='logs-spacing'>
                
                      <RoomLogs roomID={sensor.roomID} />
                  </div>
            </Tab>
        })}
     

    
      
      
    </Tabs>
</div>
            


           
        </div>
        </div>
        
        
    )
}

export default Logs;