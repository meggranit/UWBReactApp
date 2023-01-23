import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import appApi from '../services/appApi';

const initialState = {
    phone: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}



export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: () => {}
})

export const { reset } = phoneSlice.actions
export default phoneSlice.reducer