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
        addCard: (state, action: PayloadAction<string>) =>{
           let newCard = {
               id: Math.random().toString(),
               name: action.payload,
               description: '...',
               comments: [],
           }
           state.cards.push(newCard);
        }, 
        deleteCard: (state, action: PayloadAction<string>) =>{
           state.cards = state.cards.filter(card => card.name !== action.payload);
        },
        setRenameCard: (state, action: PayloadAction<string>) =>{
           state.cards.map(card => card.name === action.payload ? action.payload : card); 
        }
    }
})

export const {addCard, deleteCard, setRenameCard}  = cardReducer.actions;
export default cardReducer.reducer;