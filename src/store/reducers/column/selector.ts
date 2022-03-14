import { useAppSelector } from "../../../hooks/index";
import { RootState } from "../../store";
export const columns = (state:RootState) => state.column.columns;