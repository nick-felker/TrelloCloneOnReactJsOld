import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {CardType} from './../../../types/index'

interface CardsArray{
    cards:CardType[]
}

const initialState:CardsArray = {
    cards: []
}

interface changeCardType{
    description?:string;
    name?:string;
    cardId:string;
}
interface addCardType{
    name: string;
    columnId: string;
}

export const cardReducer = createSlice({
    name: 'card',
    initialState,
    reducers:{
        addCard: (state, {payload}: PayloadAction<addCardType>) =>{
           let newCard = {
               id: Math.random().toString(),
               name: payload.name,
               columnId: payload.columnId,
           }
           state.cards.push(newCard);
        }, 
        deleteCard: (state, action: PayloadAction<string>) =>{
           state.cards = state.cards.filter(card => card.id !== action.payload);
        },
        changeCard: (state, {payload}:PayloadAction<changeCardType>) =>{
            state.cards = state.cards.map(card => {
                if(card.id === payload.cardId){
                    return {...card, ...payload}
                }
                else{
                    return card;
                }
            
           });
            
        }
    }
})

export const {addCard, deleteCard, changeCard}  = cardReducer.actions;
export default cardReducer.reducer;