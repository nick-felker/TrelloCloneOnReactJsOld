import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { columnArray } from "../../../types";

interface appData{
    appDataArray: columnArray[]
}

const initialState:appData = {
    appDataArray : [
        {id: Math.random.toString() , name : 'ToDo', cards: []},
        {id: Math.random.toString(), name : 'In Progress', cards: []},
        {id: Math.random.toString(), name : 'Testing', cards: []}, 
        {id: Math.random.toString(), name : 'Done', cards: []},
    ]
}

export const columnReducer = createSlice({
    name: 'column',
    initialState,
    reducers: {
        addNewColumn: (state, action: PayloadAction<string>) =>{
            state.appDataArray.push({id: Math.random().toString() ,name:action.payload, cards:[]});
        },
        deleteCurrentColumn: (state, action: PayloadAction<string>) =>{
           state.appDataArray = state.appDataArray.filter(column => column.name !== action.payload)
        },
        setRenameColumn: (state, action: PayloadAction<string[]>) =>{
            let cloneRowTitles = state.appDataArray;
            cloneRowTitles.map(elem =>{
            if(elem.name === action.payload[0]) { return elem.name = action.payload[1]; }
            })
            state.appDataArray = cloneRowTitles;
            
        },
    }
})

export const {addNewColumn, setRenameColumn, deleteCurrentColumn}  = columnReducer.actions;
export default columnReducer.reducer;