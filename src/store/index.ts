import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState: {
  board: string[];
  boardSize: number;
} = {
  board: [],
  boardSize: 8,
};

const candyCrushSlice = createSlice({
  name: "CandyCrush",
  initialState,
  reducers: {},
});

export const store = configureStore({
  reducer: {
    CandyCrush: candyCrushSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
