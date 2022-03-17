import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {CommentType} from './../../../types/index';

interface Comments{
    comments: CommentType[];
}

const initialState:Comments = {
    comments: []
}

interface AddCommentType{
    cardId: string;
    message: string;
}

export const commentReducer = createSlice({
    name: 'comment',
    initialState, 
    reducers:{
        addComment: (state, {payload}: PayloadAction<AddCommentType>) =>{
            const newComment = {
                cardId: payload.cardId,
                message: payload.message,
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