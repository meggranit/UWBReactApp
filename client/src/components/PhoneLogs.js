import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPhones } from '../actions/phoneActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from './Loading';
import Error from './Error';
import Pusher from 'pusher-js'

function PhoneLogs() {

    const dispatch = useDispatch()
    const phonestate = useSelector(state=>state.getAllPhonesReducer)
    const { error, loading, phones } = phonestate
    useEffect(() => {
        dispatch(getAllPhones())
        const pusher = new Pusher('df84289eebfca65c0b86', {
          cluster: 'us2'
        });
        const channel1 = pusher.subscribe('channel_room1');
        channel1.bind('event_room1', function(data) {
          //dispatch(getRoomByID(roomID));
          dispatch(getAllPhones())
        });
        return (() => {
          pusher.unsubscribe('channel_room1')
        })
    }, [])

  return (
    
    <div>
        <h1 className='selected-tab-heading'>Phone</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
       <p></p>
    <ListGroup as="ol" >
        {phones && phones.map(phone=> {
            return <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <p>Device ID: {phone.deviceID}</p>
              <p>Room ID: {phone.roomID}</p>
            </div>
            <div>
                <p>Distance: {phone.distance}</p>
            </div>
          </ListGroup.Item>
        })}

      
    </ListGroup>
    </div>
  );
}

export default PhoneLogs;