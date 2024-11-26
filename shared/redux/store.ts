import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import pickedCountrySlice from "./slices/pickedCountrySlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    country: pickedCountrySlice,
    continent: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
