import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/appStore/store";


import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store/appStore/store";

export interface MainAppRowArray {
    RowName: string;
    Cards: MainAppRowArrayCard[];
}
export interface newCardName{
    newCardName: string;
}
export interface newComment{
    newComment: string;
}

export  interface newDescription{
    newDescription: string;
}
export interface newColumnName{
    newColumnName: string;
}



export interface MainAppRowArrayCard{
    CardName: string;
    CardDescription:string;
    CardComments:string[];
}
export interface userNameInputValues{
    userName:string;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
