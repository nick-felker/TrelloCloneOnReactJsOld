import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface description{
    description:string;
}

const initialState:description = {
    description: 'Place here your card\'s desciption',
}

export const descriptionFunction = createSlice({
    name: 'description',
    initialState, 
    reducers:{
        setDescription: (state, action: PayloadAction<string>) =>{
           state.description = action.payload;
        },
    }
})

export const {setDescription}  = descriptionFunction.actions;
export default descriptionFunction.reducer;