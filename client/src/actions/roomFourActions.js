import axios from "axios";
export const getAllRoomFour=()=>async dispatch=>{

    
    dispatch({type:'GET_ALLROOMFOUR_REQUEST'})
    
    try {
        const response = await axios.get('http://localhost:8000/api/roomreports/roomfour')
        console.log(response);
        
        dispatch({type:'GET_ALLROOMFOUR_SUCCESS' , payload : response.data})
    } catch (error) {
        
        dispatch({type:'GET_ALLROOMFOUR_FAILED' , payload : error})
    }
  
  }