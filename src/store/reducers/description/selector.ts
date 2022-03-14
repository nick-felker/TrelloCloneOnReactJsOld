import { useAppSelector } from "../../../hooks/index";
import { RootState } from "../../store";
export const descriptions = (state:RootState) => state.description.descriptions;