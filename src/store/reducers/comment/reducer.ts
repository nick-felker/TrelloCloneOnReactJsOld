import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface comments{
    comments: string[];
}

const initialState:comments = {
    comments: []
}

export const commentFunction = createSlice({
    name: 'comment',
    initialState, 
    reducers:{
        addComment: (state, action: PayloadAction<string>) =>{
            state.comments.push(action.payload)
        },
        deleteComment: (state, action: PayloadAction<string>) =>{
            state.comments = state.comments.filter(comment => comment !== action.payload )
        },
    }
})

export const {addComment, deleteComment}  = commentFunction.actions;
export default commentFunction.reducer;