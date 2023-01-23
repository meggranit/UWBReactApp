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


export default function Home() {
    
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

