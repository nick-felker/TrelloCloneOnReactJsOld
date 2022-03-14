import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {description} from './../../../types/index';


interface descriptions{
    descriptions: description[];
}

const initialState:descriptions = {
    descriptions: []
}

export const descriptionReducer = createSlice({
    name: 'description',
    initialState, 
    reducers:{
        setDescription: (state, action: PayloadAction<string[]>) =>{
           const newDescription = {
               text: action.payload[0],
               cardId: action.payload[1],
           }
           state.descriptions = state.descriptions.filter(description=> description.cardId !== action.payload[1])
           state.descriptions.push(newDescription);
           
        },
    }
})

export const {setDescription}  = descriptionReducer.actions;
export default descriptionReducer.reducer;