
import { combineReducers, createSlice } from "@reduxjs/toolkit";
import addUserName from './user/reducer';
import columnReducer  from './column/reducer';
import cardReducer  from "./card/reducer";
import  commentReducer  from "./comment/reducer";
import  descriptionReducer  from "./description/reducer";



const rootReducer = combineReducers({
    userName: addUserName,
    column: columnReducer,
    card: cardReducer,
    description: descriptionReducer,
    comment: commentReducer,
})

export default rootReducer;