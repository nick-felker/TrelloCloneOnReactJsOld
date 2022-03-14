import { useAppSelector } from "../../../hooks/index";
import { RootState } from "../../store";
export const cards = (state:RootState) => state.card.cards;