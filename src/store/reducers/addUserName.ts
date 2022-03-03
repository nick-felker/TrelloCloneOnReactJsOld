import { createSlice , PayloadAction} from "@reduxjs/toolkit";


export const addingUserName = createSlice({
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



export const {addUserName}  = addingUserName.actions;
export default addingUserName.reducer;