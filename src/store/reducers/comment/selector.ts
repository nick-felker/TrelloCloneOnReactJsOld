import { useAppSelector } from "../../../hooks/index";
import { RootState } from "../../store";
export const comments = (state:RootState) => state.comment.comments;