import { createSlice } from "@reduxjs/toolkit";
import { DoctorType } from "../services/apiDoctors";

export interface TurnType {
  doctor: DoctorType;
  time: string;
  day: string;
  isFinished: boolean;
}

export interface TurnStateType {
  turns: TurnType[];
}
const initialState: TurnStateType = {
  turns: [],
};

type ActionAddType = { payload: TurnType };
type ActionRemoveType = { payload: number };

const turnSlice = createSlice({
  name: "turn",
  initialState,
  reducers: {
    addTurn(state, action: ActionAddType) {
      state.turns = [...state.turns, action.payload];
    },
    removeTurn(state, action: ActionRemoveType) {
      state.turns = state.turns.filter(
        (turn, index) => index !== action.payload
      );
    },
    editTurn(state, action: ActionRemoveType) {
      state.turns = state.turns.map((turn, index) =>
        index === action.payload
          ? { ...turn, isFinished: !turn.isFinished }
          : turn
      );
    },
  },
});

export const { addTurn, removeTurn,editTurn } = turnSlice.actions;

export default turnSlice.reducer;
