
import { combineReducers, createSlice } from "@reduxjs/toolkit";
import addUserName from '../reducers/userName/addUserName';
import mainAppFunctional from '../reducers/mainAppFunctional';
import columnFunction  from './column/reducer';
import  cardFunction  from "./card/reducer";


const initialState = {
    appDataArray : [
        {RowName : 'ToDo', Cards: []},
        {RowName : 'In Progress', Cards: []},
        {RowName : 'Testing', Cards: []}, 
        {RowName : 'Done', Cards: []},
    ]
}

const combinedAppReducer = combineReducers({
    columnFunction,
    cardFunction,
})

const rootReducer = combineReducers({
    userName: addUserName,
    mainAppFunctional: mainAppFunctional,
    app: combinedAppReducer,
})

export default rootReducer;