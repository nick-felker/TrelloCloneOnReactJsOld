import { useAppSelector } from "../../../hooks/index";
import { RootState } from "../../store";
export const userName = (state:RootState) => state.userName.userName;