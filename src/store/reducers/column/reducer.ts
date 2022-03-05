import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface column{
    columnName: string;
}

const initialState:column = {
    columnName: ''
}

export const columnFunction = createSlice({
    name: 'column',
    initialState,
    reducers: {
        addNewColumn: (state: column, action:PayloadAction<string>) =>{

        },
        setNewColumnName: (state: column, action:PayloadAction<string>) =>{

        },
    }
})

export const {addNewColumn, setNewColumnName}  = columnFunction.actions;
export default columnFunction.reducer;