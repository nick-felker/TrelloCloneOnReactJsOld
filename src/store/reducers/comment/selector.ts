import { CommentType } from "../../../types";
import { RootState } from "../../store";
export const commentsSelector = (state:RootState) => state.comment.comments;

export const selectCommentsByCardId = (state:RootState, cardId:string) => 
    state.comment.comments.filter((comment:CommentType)=> comment.cardId === cardId)
    
    


