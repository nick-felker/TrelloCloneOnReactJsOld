import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainAppRowArray } from "../../types";



export interface appData{
    appDataArray: MainAppRowArray[],
   
}
/*export interface setRenameColumnProps{
    earlierTitle: string,
    newTitle: string,
}*/

const initialState: appData = {
    appDataArray : [
        {RowName : 'ToDo', Cards: []},
        {RowName : 'In Progress', Cards: []},
        {RowName : 'Testing', Cards: []}, 
        {RowName : 'Done', Cards: []},
    ]
}

export const AppFunctional = createSlice({
    name: 'mainAppFunctional',
    initialState,
    reducers:{
        addNewColumn: (state, action: PayloadAction<string>) =>{
            let RowObject: MainAppRowArray = {
                RowName : action.payload,
                Cards : [],
            }
            state.appDataArray = state.appDataArray.concat(RowObject);
        },

        deleteCurrentColumn: (state, action: PayloadAction<string>) =>{
            for(let i in state.appDataArray){
                if(state.appDataArray[i].RowName === action.payload){
                    state.appDataArray.splice(parseInt(i), 1);
                    break;
                }
            }
        },
        setRenameColumn: (state, action: PayloadAction<any[]>) =>{
            let cloneRowTitles = state.appDataArray;
            cloneRowTitles.map(elem =>{
            if(elem.RowName === action.payload[0]) { return elem.RowName = action.payload[1]; }
            })
            state.appDataArray = cloneRowTitles;
        },
        addCard: (state, action: PayloadAction<any[]>) =>{
            let newCardObjectData = {
                CardName: action.payload[0],
                CardDescription: 'Add a more detailed description...',
                CardComments: [],
            };
            for(let i in state.appDataArray){
                if(state.appDataArray[i].RowName === action.payload[1]){
                    state.appDataArray[i].Cards.push(newCardObjectData);
                    return
                }
            }
        }, 
        deleteCard: (state, action: PayloadAction<any[]>) =>{
            state.appDataArray[action.payload[0]].Cards.splice(Number(action.payload[1]), 1);
        },
        addComment: (state, action: PayloadAction<any[]>) =>{
            for(let i in state.appDataArray){
                for(let j in state.appDataArray[i].Cards){
                    if(state.appDataArray[i].Cards[j].CardName === action.payload[0]){
                        state.appDataArray[i].Cards[j].CardComments.push(action.payload[1]);
                        alert(state.appDataArray[i].Cards[j].CardComments)
                    }
                }
            }
            
        },
        setDescription: (state, action: PayloadAction<string[]>) =>{
            for(let i in state.appDataArray){
                for(let j in state.appDataArray[i].Cards){
                    if(state.appDataArray[i].Cards[j].CardName === action.payload[0]){
                        state.appDataArray[i].Cards[j].CardDescription = action.payload[1];
                    }
                }
            }
        },
        deleteComment: (state, action: PayloadAction<any[]>) =>{
            state.appDataArray[action.payload[0]].Cards[action.payload[1]].CardComments.splice(Number(action.payload[2]), 1);
        },
        setRenameCard: (state, action: PayloadAction<string[]>) =>{
            for(let i in state.appDataArray){
                for(let j in state.appDataArray[i].Cards){
                    if(state.appDataArray[i].Cards[j].CardName === action.payload[0]){
                        state.appDataArray[i].Cards[j].CardName = action.payload[1];
                    }
                }
            }
        }

        
    }
})



export const {addNewColumn, setRenameCard, deleteCurrentColumn, setRenameColumn, addCard, deleteCard, addComment, setDescription, deleteComment,}  = AppFunctional.actions;
export default AppFunctional.reducer;