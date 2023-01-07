import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function RoomTwoLogs() {
  return (
    <div>
        <h1 className='selected-tab-heading'>Room Two</h1>
    <ListGroup as="ol" >
    <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
         <p>Latitude:</p>
         <p>Longitude:</p>
         <p>Device ID:</p>
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
         <p>Latitude:</p>
         <p>Longitude:</p>
         <p>Device ID:</p>
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
         <p>Latitude:</p>
         <p>Longitude:</p>
         <p>Device ID:</p>
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

export default RoomTwoLogs;