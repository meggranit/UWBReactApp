import axios from "axios";
export const getAllSensors=()=>async dispatch=>{

    
    dispatch({type:'GET_ALLSENSORS_REQUEST'})
    
    try {
        const response = await axios.get('http://localhost:8000/api/sensors')
        console.log(response);
        
        dispatch({type:'GET_ALLSENSORS_SUCCESS' , payload : response.data})
    } catch (error) {
        
        dispatch({type:'GET_ALLSENSORS_FAILED' , payload : error})
    }
  
  }