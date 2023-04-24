import { createSlice } from "@reduxjs/toolkit";
export interface AddState {
  value: number;
}
const initialState: AddState = { value: 0 };
export const addFn = createSlice({
  name: "add",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = addFn.actions;
export default addFn.reducer;
