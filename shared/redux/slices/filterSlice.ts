import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  pickedContinent: string;
}

const initialState: CounterState = {
  pickedContinent: "",
};

export const filterSlice = createSlice({
  name: "continent",
  initialState,
  reducers: {
    setPickedContinent: (state, action) => {
      state.pickedContinent = action.payload;
    },
  },
});

export const { setPickedContinent } = filterSlice.actions;

export default filterSlice.reducer;
