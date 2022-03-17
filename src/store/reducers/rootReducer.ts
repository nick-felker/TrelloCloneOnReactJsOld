import { combineReducers} from "@reduxjs/toolkit";
import addUserName from './user/reducer';
import columnReducer  from './column/reducer';
import cardReducer  from "./card/reducer";
import  commentReducer  from "./comment/reducer";


const rootReducer = combineReducers({
    user: addUserName,
    column: columnReducer,
    card: cardReducer,
    comment: commentReducer,
})

export default rootReducer