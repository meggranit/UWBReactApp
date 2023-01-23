import axios from "axios";
export const getAllRoomTwo=()=>async dispatch=>{

    
    dispatch({type:'GET_ALLROOMTWO_REQUEST'})
    
    try {
        const response = await axios.get('http://localhost:8000/api/roomtwo')
        console.log(response);
        
        dispatch({type:'GET_ALLROOMTWO_SUCCESS' , payload : response.data})
    } catch (error) {
        
        dispatch({type:'GET_ALLROOMTWO_FAILED' , payload : error})
    }
  
  }