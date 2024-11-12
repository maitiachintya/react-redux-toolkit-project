import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../counter/CounterSlice"; // Adjust the path as necessary
import  postSlice  from "../posts/PostSlice";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    posts: postSlice
  },
});

export default store;
