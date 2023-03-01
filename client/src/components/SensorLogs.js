import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSensors } from '../actions/sensorActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Loading from './Loading';
import Error from './Error';


function SensorLogs() {

    const dispatch = useDispatch()
    const sensorstate =  useSelector(state=>state.getAllSensorsReducer)
    const { error, loading, sensors } = sensorstate
    useEffect(() => {
        dispatch(getAllSensors())
    }, [])

  return (
    
    <div>
        <h1 className='selected-tab-heading'>Sensors</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
       <p></p>
    <ListGroup as="ol" >
        {sensors && sensors.map(sensor=> {
            return <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <p>Sensor ID: {sensor.sensorID}</p>
              <p>Room ID: {sensor.roomID}</p>
            </div>
            <div>
                <p>Latitude: {sensor.latitude}</p>
                <p>Longitude: {sensor.longitude}</p>
            </div>
          </ListGroup.Item>
        })}

      
    </ListGroup>
    </div>
  );
}

export default SensorLogs;