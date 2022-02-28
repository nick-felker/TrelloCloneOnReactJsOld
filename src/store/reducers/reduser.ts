
import { MainAppRowArray } from "../../types";
interface userAction {
    type: string;
    payload: any;
}

const initialState:MainAppRowArray[] = [{RowName : 'ToDo', Cards: []}, {RowName : 'In Progress', Cards: []}, {RowName : 'Testing', Cards: []}, {RowName : 'Done', Cards: []}, ];


const app = (state = initialState, action:userAction)=>{
    switch(action.type){
        case 'ADD_NEW_CARD':
            return;
        case 'ADD_NEW_COLUMN':
            return;
        case 'ADD_NEW_COMMENT':
            return;
        case 'SET_DESCRIPTION':
            return;
        case 'DELETE_COMMENT':
            return;
        case 'DELETE_COLUMN':
            return;
        case 'DELETE_CARD':
            return;
        case 'RENAME_CARD':
            return;
        case 'RENAME_COLUMN':
            return;
        default:
            return state;
    }
}

export default app;