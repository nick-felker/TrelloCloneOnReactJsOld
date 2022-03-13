import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface description{
    description:string;
}

const initialState:description = {
    description: 'Place here your card\'s desciption',
}

export const descriptionReducer = createSlice({
    name: 'description',
    initialState, 
    reducers:{
        setDescription: (state, action: PayloadAction<string>) =>{
           state.description = action.payload;
        },
    }
})

export const {setDescription}  = descriptionReducer.actions;
export default descriptionReducer.reducer;