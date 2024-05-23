import { createSlice } from "@reduxjs/toolkit";
import { action, dogBreed } from "./types";

const dogBreedListSlice = createSlice({
  name: "doglist",
  initialState: [] as dogBreed[],
  reducers: {
    addDogBreedList: (state, action: action) => {
      state = action.payload;
      return state;
    },
  },
});

export const dogBreedActions = dogBreedListSlice.actions;
export const dogBreedListReducer = dogBreedListSlice.reducer;
export default dogBreedListSlice;
