import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPhones } from '../actions/phoneActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from './Loading';
import Error from './Error';


function PhoneLogs() {

    const dispatch = useDispatch()
    const phonestate = useSelector(state=>state.getAllPhonesReducer)
    const { error, loading, phones } = phonestate
    useEffect(() => {
        dispatch(getAllPhones())
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
              <p>Device ID: {phone._id}</p>
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