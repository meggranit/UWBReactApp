export const getAllRoomFourReducer=(state={roomfour : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLROOMFOUR_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLROOMFOUR_SUCCESS' : return{
            loading : false ,
            roomfour : action.payload
        }
        case 'GET_ALLROOMFOUR_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}