import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/CounterSlice"; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
