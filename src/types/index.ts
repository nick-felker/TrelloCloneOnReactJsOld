
export interface ColumnType{
    id: string;
    name: string;
}
export interface CardType{
    id: string;
    columnId:string;
    name: string;
    description?: string;
}

export interface CommentType{
    cardId: string;
    message: string;
    id: string;
}

export interface UserType{
    userName:string;
}
