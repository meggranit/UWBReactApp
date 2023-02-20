export const getAllRoomsReducer=(state={rooms : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLROOMS_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLROOMS_SUCCESS' : return{
            loading : false ,
            rooms : action.payload
        }
        case 'GET_ALLROOMS_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}