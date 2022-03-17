import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {UserType} from '../../../types'

const initialState:UserType = {
    userName: '',
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUserName: (state, action: PayloadAction<string>) =>{
            state.userName = action.payload
        },
    }
})



export const {addUserName}  = userReducer.actions;
export default userReducer.reducer;