import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  pickedCountry: string;
  isInfoVisible: boolean;
}

const initialState: CounterState = {
  pickedCountry: "",
  isInfoVisible: false,
};

export const pickedCountrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setPickedCountry: (state, action) => {
      state.pickedCountry = action.payload;
    },
    setIsInfoVisible: (state, action) => {
      state.isInfoVisible = action.payload;
    },
  },
});

export const { setPickedCountry, setIsInfoVisible } =
  pickedCountrySlice.actions;

export default pickedCountrySlice.reducer;
