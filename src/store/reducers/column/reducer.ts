import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { ColumnType } from "../../../types";

interface Columns{
    columns: ColumnType[]
}

const initialState:Columns = {
    columns : [
        {id: Math.random().toString(), name : 'ToDo'},
        {id: Math.random().toString(), name : 'In Progress'},
        {id: Math.random().toString(), name : 'Testing'}, 
        {id: Math.random().toString(), name : 'Done'},
    ]
}

interface ChangeColumnType{
    columnId: string;
    newColumnName: string;
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
        changeColumn: (state, {payload}: PayloadAction<ChangeColumnType>) =>{
           state.columns.map(column => column.id === payload.columnId ? column.name = payload.newColumnName : null);
            
        },
    }
})

export const {addNewColumn, changeColumn, deleteCurrentColumn}  = columnReducer.actions;
export default columnReducer.reducer;