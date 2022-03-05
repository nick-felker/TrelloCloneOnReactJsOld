import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface comments{
    comments: string[] | [];
}

const initialState:comments = {
    comments: []
}

export const commentFunction = createSlice({
    name: 'comment',
    initialState, 
    reducers:{
        addComment: (state:comments, action:PayloadAction<string>) =>{

        },
        deleteComment: (state:comments, action:PayloadAction<string>) =>{

        },
    }
})

export const {addComment, deleteComment}  = commentFunction.actions;
export default commentFunction.reducer;