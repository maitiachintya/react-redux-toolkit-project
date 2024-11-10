import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, msg: "" };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.msg = "Increment done";
    },
    decrement: (state) => {
      state.count -= 1;
      state.msg = "Decrement done";
    },
    reset: (state) => {
      state.count = 0;
      state.msg = "Reset done";
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
