import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Phone = (phoneData) => (
 <tr>
   <td>{phoneData.phone.deviceID}</td>
   <td>{phoneData.phone.roomID}</td>
   <td>{phoneData.phone.distance}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${phoneData.phone._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         phoneData.deletePhone(phoneData.phone._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function PhoneList() {
 const [phones, setPhones] = useState([]);
 
 // This method fetches the phones from the database.
 useEffect(() => {
   async function getPhones() {
     const response = await fetch(`http://localhost:8000/phone/getallphones/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const phones = await response.json();
     setPhones(phones);
   }
 
   getPhones();
 
   return;
 }, [phones.length]);
 
 // This method will delete a phone
 async function deletePhone(id) {
   await fetch(`http://localhost:8000/${id}`, {
     method: "DELETE"
   });
 
   const newPhones = phones.filter((el) => el._id !== id);
   setPhones(newPhones);
 }
 
 // This method will map out the phones on the table
 function phoneList() {
   return phones.map((phone) => {
     return (
      <div>
       <Phone
         phone={phone}
         deletePhone={() => deletePhone(phone._id)}
         key={phone._id}
       />
       <h1>hi</h1>
       </div>
       
     );
   });
 }
 
 // This following section will display the table with the phones of individuals.
 return (
   <div>
     <h3>Phone List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{phoneList()}</tbody>
     </table>
   </div>
 );
}