import { RootState } from "../../store";
import { CardType } from "../../../types";
export const selectCardsByColumnId = (state:RootState, columnId: string) =>
  state.card.cards.filter((card:CardType) => card.columnId === columnId);

export const selectCardById = (state:RootState, cardId:string) =>
    state.card.cards.find((card:CardType) => card.id === cardId);
    
export const selectDescriptionByCardId = (state:RootState, cardId:string) =>
    state.card.cards.map((card:CardType)=>{
        if(card.id === cardId){
            return card.description;
        }
    })

