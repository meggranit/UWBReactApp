import axios from "axios";
export const getAllRooms=()=>async dispatch=>{

    
    dispatch({type:'GET_ALLROOMS_REQUEST'})
    
    try {
        const response = await axios.get('http://localhost:8000/api/roomreports')
        console.log(response);
        
        dispatch({type:'GET_ALLROOMS_SUCCESS' , payload : response.data})
    } catch (error) {
        
        dispatch({type:'GET_ALLROOMS_FAILED' , payload : error})
    }
  
  }




export const getRoomByID = (roomID) =>async (dispatch) => {
    
    dispatch({type:'GET_ROOMBYID_REQUEST'})

    try {
        const response = await axios.post('http://localhost:8000/api/roomreports/getroombyid' , {roomID})
        console.log(response);
        dispatch({type:'GET_ROOMBYID_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_ROOMBYID_FAILED' , payload : error})
    }
   
}
