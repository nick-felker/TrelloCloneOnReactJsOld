
import type { RootState } from "../store/store";

export interface columnArray {
    id: string;
    name: string;
    cards: card[];
}
export interface card{
    id: string;
    name: string;
    description:string;
    comments:string[];
}

export interface comment{
    cardId: string;
    message: string;
}

export interface description{
    cardId: string;
    text: string;
}
export interface userNameInputValues{
    userName:string;
}


