export const getAllRoomOneReducer=(state={roomone : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLROOMONE_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLROOMONE_SUCCESS' : return{
            loading : false ,
            roomone : action.payload
        }
        case 'GET_ALLROOMONE_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}