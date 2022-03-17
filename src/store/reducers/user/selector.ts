import { RootState } from "../../store";
export const userNameSelector = (state:RootState) => state.user.userName;