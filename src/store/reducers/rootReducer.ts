
import { combineReducers, createSlice } from "@reduxjs/toolkit";
import addUserName from '../reducers/userName/addUserName';
import mainAppFunctional from '../reducers/mainAppFunctional';
import columnFunction  from '../reducers/column/reducer';


const initialState = {
    appDataArray : [
        {RowName : 'ToDo', Cards: []},
        {RowName : 'In Progress', Cards: []},
        {RowName : 'Testing', Cards: []}, 
        {RowName : 'Done', Cards: []},
    ]
}

const rootReducer = combineReducers({
    userName: addUserName,
    mainAppFunctional: mainAppFunctional,
    app: columnFunction
})

export default rootReducer;