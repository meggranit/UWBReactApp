import React from 'react'
import UserLogs from '../components/UserLogs';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RoomOneLogs from '../components/RoomOneLogs';
import RoomTwoLogs from '../components/RoomTwoLogs';
import RoomThreeLogs from '../components/RoomThreeLogs';
import RoomFourLogs from '../components/RoomFourLogs';
import RoomFiveLogs from '../components/RoomFiveLogs';


function Logs() {
    const [key, setKey] = useState('phone');

    return (
        <div className='logs-layout'>
        <div>
            <h1 className='logs-h1'>Logs</h1>
<div>
<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="phone" title="Phone">
      <div className='logs-spacing'>
                <UserLogs />
            </div>
      </Tab>
      <Tab eventKey="roomone" title="Room One">
      <div className='logs-spacing'>
                <RoomOneLogs />
            </div>
      </Tab>
      <Tab eventKey="roomtwo" title="Room Two">
      <div className='logs-spacing'>
                <RoomTwoLogs />
            </div>
      </Tab>
      <Tab eventKey="roomthree" title="Room Three">
      <div className='logs-spacing'>
                <RoomThreeLogs />
            </div>
      </Tab>
      <Tab eventKey="roomfour" title="Room Four">
      <div className='logs-spacing'>
                <RoomFourLogs />
            </div>
      </Tab>
      <Tab eventKey="roomfive" title="Room Five">
      <div className='logs-spacing'>
                <RoomFiveLogs />
            </div>
      </Tab>
      
    </Tabs>
</div>
            


           
        </div>
        </div>
        
        
    )
}

export default Logs;