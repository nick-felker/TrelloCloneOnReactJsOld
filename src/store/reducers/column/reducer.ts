import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { MainAppRowArray } from "../../../types";

interface appData{
    appDataArray: MainAppRowArray[]
}

const initialState:appData = {
    appDataArray : [
        {ColumnName : 'ToDo', Cards: []},
        {ColumnName : 'In Progress', Cards: []},
        {ColumnName : 'Testing', Cards: []}, 
        {ColumnName : 'Done', Cards: []},
    ]
}

export const columnFunction = createSlice({
    name: 'column',
    initialState,
    reducers: {
        addNewColumn: (state, action: PayloadAction<string>) =>{
            state.appDataArray.push({ColumnName:action.payload, Cards:[]});
        },
        deleteCurrentColumn: (state, action: PayloadAction<string>) =>{
           state.appDataArray = state.appDataArray.filter(Column => Column.ColumnName !== action.payload)
        },
        setRenameColumn: (state, action: PayloadAction<string[]>) =>{
            let cloneRowTitles = state.appDataArray;
            cloneRowTitles.map(elem =>{
            if(elem.ColumnName === action.payload[0]) { return elem.ColumnName = action.payload[1]; }
            })
            state.appDataArray = cloneRowTitles;
            
        },
    }
})

export const {addNewColumn, setRenameColumn, deleteCurrentColumn}  = columnFunction.actions;
export default columnFunction.reducer;