export const getAllRoomThreeReducer=(state={roomthree : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLROOMTHREE_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLROOMTHREE_SUCCESS' : return{
            loading : false ,
            roomthree : action.payload
        }
        case 'GET_ALLROOMTHREE_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}