import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { MainAppRowArray } from "../../../types";

interface appData{
    appDataArray: MainAppRowArray[]
}

const initialState:appData = {
    appDataArray : [
        {RowName : 'ToDo', Cards: []},
        {RowName : 'In Progress', Cards: []},
        {RowName : 'Testing', Cards: []}, 
        {RowName : 'Done', Cards: []},
    ]
}

export const columnFunction = createSlice({
    name: 'column',
    initialState,
    reducers: {
        addNewColumn: (state, action: PayloadAction<string>) =>{
          
        },
        deleteCurrentColumn: (state, action: PayloadAction<string>) =>{
           
        },
        setRenameColumn: (state, action: PayloadAction<any[]>) =>{
            
        },
    }
})

export const {addNewColumn, setRenameColumn}  = columnFunction.actions;
export default columnFunction.reducer;