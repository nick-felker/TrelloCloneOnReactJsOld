import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {comment} from './../../../types/index';

interface comments{
    comments: comment[];
}

const initialState:comments = {
    comments: []
}

export const commentReducer = createSlice({
    name: 'comment',
    initialState, 
    reducers:{
        addComment: (state, action: PayloadAction<string[]>) =>{
            const newComment = {
                cardId: action.payload[0],
                message: action.payload[1],
                id: Math.random().toString(),
            }
            state.comments.push(newComment);
        },
        deleteComment: (state, action: PayloadAction<string>) =>{
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
    }
})

export const {addComment, deleteComment}  = commentReducer.actions;
export default commentReducer.reducer;