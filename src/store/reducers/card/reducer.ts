import { createSlice , PayloadAction} from "@reduxjs/toolkit";


interface card{
    cardName: string;
    cardDescription:string;
    cardComments: string[];
}

interface cardsArray{
    cards:card[]
}

const initialState:cardsArray = {
    cards: []
}


export const cardFunction = createSlice({
    name: 'card',
    initialState,
    reducers:{
        addCard: (state, action: PayloadAction<string>) =>{
           let newCard = {
               cardName: action.payload,
               cardDescription: '...',
               cardComments: [],
           }
           state.cards.push(newCard);
        }, 
        deleteCard: (state, action: PayloadAction<string>) =>{
           state.cards = state.cards.filter(card => card.cardName !== action.payload);
        },
        setRenameCard: (state, action: PayloadAction<string>) =>{
           state.cards.map(card => card.cardName === action.payload ? action.payload : card); 
        }
    }
})

export const {addCard, deleteCard, setRenameCard}  = cardFunction.actions;
export default cardFunction.reducer;