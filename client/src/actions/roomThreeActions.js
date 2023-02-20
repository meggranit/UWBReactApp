import axios from "axios";
export const getAllRoomThree=()=>async dispatch=>{

    
    dispatch({type:'GET_ALLROOMTHREE_REQUEST'})
    
    try {
        const response = await axios.get('http://localhost:8000/api/roomreports/roomthree')
        console.log(response);
        
        dispatch({type:'GET_ALLROOMTHREE_SUCCESS' , payload : response.data})
    } catch (error) {
        
        dispatch({type:'GET_ALLROOMTHREE_FAILED' , payload : error})
    }
  
  }