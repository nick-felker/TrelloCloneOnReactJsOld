import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { column } from "../../../types";

interface appData{
    columns: column[]
}

const initialState:appData = {
    columns : [
        {id: Math.random().toString(), name : 'ToDo'},
        {id: Math.random().toString(), name : 'In Progress'},
        {id: Math.random().toString(), name : 'Testing'}, 
        {id: Math.random().toString(), name : 'Done'},
    ]
}

export const columnReducer = createSlice({
    name: 'column',
    initialState,
    reducers: {
        addNewColumn: (state, action: PayloadAction<string>) =>{
            state.columns.push({id: Math.random().toString(), name: action.payload});
        },
        deleteCurrentColumn: (state, action: PayloadAction<string>) =>{
           state.columns = state.columns.filter(column => column.name !== action.payload)
        },
        setRenameColumn: (state, action: PayloadAction<string[]>) =>{
           state.columns.map(column => column.id === action.payload[0] ? column.name = action.payload[1] : null);
            
        },
    }
})

export const {addNewColumn, setRenameColumn, deleteCurrentColumn}  = columnReducer.actions;
export default columnReducer.reducer;