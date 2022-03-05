import { createSlice , PayloadAction} from "@reduxjs/toolkit";


interface card{
    cardName: string;
    cardDescription:string;
    cardComments: string[] | [];
}

const initialState:card = {
    cardName: '',
    cardDescription: '',
    cardComments: [],
}

export const cardFunction = createSlice({
    name: 'card',
    initialState,
    reducers:{
        addCard: (state:card, action:PayloadAction<string[]>) =>{
            
        },
        deleteCard: (state:card, action:PayloadAction<string[]>) =>{
            
        },
        setNewCardName: (state:card, action:PayloadAction<string[]>) =>{
            
        },
    }
})

export const {addCard, deleteCard, setNewCardName}  = cardFunction.actions;
export default cardFunction.reducer;