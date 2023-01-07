import React from 'react'
import RoomOne from '../components/RoomOne';
import RoomTwo from '../components/RoomTwo';
import RoomThree from '../components/RoomThree';
import RoomFour from '../components/RoomFour';
import RoomFive from '../components/RoomFive';
import Clock from '../components/Clock';
import Stack from 'react-bootstrap/Stack';


function Home() {
    return (
        <div>
        <div>
        <Clock></Clock>
      </div>
      <div className='graph-layout'>
          <RoomOne></RoomOne>
          <RoomTwo></RoomTwo>
          <RoomThree></RoomThree>
          <RoomFour></RoomFour>
          <RoomFive></RoomFive>
          </div>
          </div>
    )
}

export default Home