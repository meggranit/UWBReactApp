export const getAllSensorsReducer=(state={sensors : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLSENSORS_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLSENSORS_SUCCESS' : return{
            loading : false ,
            sensors : action.payload
        }
        case 'GET_ALLSENSORS_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}