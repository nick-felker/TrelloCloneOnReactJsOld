import { createSlice , PayloadAction} from "@reduxjs/toolkit";


export const addUserNameFunction = createSlice({
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



export const {addUserName}  = addUserNameFunction.actions;
export default addUserNameFunction.reducer;