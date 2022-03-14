import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {card} from './../../../types/index'

interface cardsArray{
    cards:card[]
}

const initialState:cardsArray = {
    cards: []
}


export const cardReducer = createSlice({
    name: 'card',
    initialState,
    reducers:{
        addCard: (state, action: PayloadAction<string[]>) =>{
           let newCard = {
               id: Math.random().toString(),
               name: action.payload[0],
               columnId: action.payload[1],
           }
           state.cards.push(newCard);
        }, 
        deleteCard: (state, action: PayloadAction<string>) =>{
           state.cards = state.cards.filter(card => card.id !== action.payload);
        },
        setRenameCard: (state, action: PayloadAction<string[]>) =>{
           state.cards.map(card => card.id === action.payload[0] ? card.name = action.payload[1] : card); 
        }
    }
})

export const {addCard, deleteCard, setRenameCard}  = cardReducer.actions;
export default cardReducer.reducer;