export const getAllRoomFiveReducer=(state={roomfive : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLROOMFIVE_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLROOMFIVE_SUCCESS' : return{
            loading : false ,
            roomfive : action.payload
        }
        case 'GET_ALLROOMFIVE_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}