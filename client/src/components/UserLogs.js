import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


function UserLogs() {


  return (
    
    <div>
        <h1 className='selected-tab-heading'>Phone</h1>
       <p></p>
    <ListGroup as="ol" >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <p>Device ID:</p>
          <p>Room ID:</p>
        </div>
        <div>
            <p>Distance: </p>
            <p>Time:</p>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <p>Device ID:</p>
          <p>Room ID:</p>
        </div>
        <div>
            <p>Distance: </p>
            <p>Time:</p>
        </div>
        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
         <div className="ms-2 me-auto">
          <p>Device ID:</p>
          <p>Room ID:</p>
        </div>
        <div>
            <p>Distance: </p>
            <p>Time:</p>
        </div>
        
      </ListGroup.Item>
      
    </ListGroup>
    </div>
  );
}

export default UserLogs;