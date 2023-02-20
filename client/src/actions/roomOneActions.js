import axios from "axios";
export const getAllRoomOne=()=>async dispatch=>{

    
    dispatch({type:'GET_ALLROOMONE_REQUEST'})
    
    try {
        const response = await axios.get('http://localhost:8000/api/roomreports/roomone')
        console.log(response);
        
        dispatch({type:'GET_ALLROOMONE_SUCCESS' , payload : response.data})
    } catch (error) {
        
        dispatch({type:'GET_ALLROOMONE_FAILED' , payload : error})
    }
  
  }