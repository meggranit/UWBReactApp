import axios from "axios";
export const getAllPhones=()=>async dispatch=>{

    
    dispatch({type:'GET_ALLPHONES_REQUEST'})
    
    try {
        const response = await axios.get('http://localhost:8000/api/phones')
        console.log(response);
        
        dispatch({type:'GET_ALLPHONES_SUCCESS' , payload : response.data})
    } catch (error) {
        
        dispatch({type:'GET_ALLPHONES_FAILED' , payload : error})
    }
  
  }