export const getAllRoomTwoReducer=(state={roomtwo : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLROOMTWO_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLROOMTWO_SUCCESS' : return{
            loading : false ,
            roomtwo : action.payload
        }
        case 'GET_ALLROOMTWO_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}