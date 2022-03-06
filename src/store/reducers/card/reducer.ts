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
        addCard: (state, action: PayloadAction<any[]>) =>{
           alert('11')
        }, 
        deleteCard: (state, action: PayloadAction<any[]>) =>{
         
        },
        setRenameCard: (state, action: PayloadAction<string[]>) =>{
           
        }
    }
})

export const {addCard, deleteCard, setRenameCard}  = cardFunction.actions;
export default cardFunction.reducer;