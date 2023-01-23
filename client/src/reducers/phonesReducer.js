export const getAllPhonesReducer=(state={phones : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLPHONES_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_ALLPHONES_SUCCESS' : return{
            loading : false ,
            phones : action.payload
        }
        case 'GET_ALLPHONES_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}