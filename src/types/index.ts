
export interface column{
    id: string;
    name: string;
}
export interface card{
    id: string;
    columnId:string;
    name: string;
}

export interface comment{
    cardId: string;
    message: string;
    id: string;
}

export interface description{
    cardId: string;
    text: string;
}


