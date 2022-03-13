import { createSlice , PayloadAction} from "@reduxjs/toolkit";


export const userReducer = createSlice({
    name: 'userName',
    initialState: {
        userName: '',
    },
    reducers:{
        addUserName: (state, action: PayloadAction<string>) =>{
            state.userName = action.payload
        },
    }
})



export const {addUserName}  = userReducer.actions;
export default userReducer.reducer;