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
        addComment: (state, action: PayloadAction<any[]>) =>{
            
        },
        deleteComment: (state, action: PayloadAction<any[]>) =>{
            
        },
    }
})

export const {addComment, deleteComment}  = commentFunction.actions;
export default commentFunction.reducer;