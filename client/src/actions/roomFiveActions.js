import axios from "axios";
export const getAllRoomFive=()=>async dispatch=>{

    
    dispatch({type:'GET_ALLROOMFIVE_REQUEST'})
    
    try {
        const response = await axios.get('http://localhost:8000/api/roomreports/roomfive')
        console.log(response);
        
        dispatch({type:'GET_ALLROOMFIVE_SUCCESS' , payload : response.data})
    } catch (error) {
        
        dispatch({type:'GET_ALLROOMFIVE_FAILED' , payload : error})
    }
  
  }