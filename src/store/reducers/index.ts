import { appReducer } from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    app: appReducer
})


export default rootReducer