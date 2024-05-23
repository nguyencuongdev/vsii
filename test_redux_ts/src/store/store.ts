import { configureStore } from "@reduxjs/toolkit";
import { dogBreedListReducer } from "./dogBreedListSlice";

const store = configureStore({
  reducer: {
    dogBreedList: dogBreedListReducer,
  },
});

export default store;
