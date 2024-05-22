import { createSlice, configureStore } from "@reduxjs/toolkit";

//Define the initial state of the slice
const initialState = {
  count: 0,
};

//Create a slice with Reducer
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count > 0 && (state.count -= 1);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

//Extract the action creators object and the reducer
const { actions, reducer } = counterSlice;

//Destructure and export the action creators
export const { increment, decrement, reset } = actions;

//Create a store with the reducer
const store = configureStore({ reducer: { counter: reducer } });

// Define RootState and AppDispatch types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
