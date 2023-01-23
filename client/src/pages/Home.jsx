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


export default function Home() {
    
    return (
        <div className="home-layout">
            <RoomCount />
            <div>
        <Clock></Clock>
        </div>
        </div>
    )
}

