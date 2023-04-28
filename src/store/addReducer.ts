import { createSlice } from "@reduxjs/toolkit";
export interface AddState {
  value: number;
  token: string | null;
}
const initialState: AddState = {
  value: 0,
  token: localStorage.getItem("token") || null,
};
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
    setToken: (state, { payload }) => {
      console.log("[ payload ] >", payload);
      localStorage.setItem("token", payload);
      state.token = payload;
    },
  },
});

export const { increase, decrease, setToken } = addFn.actions;
export default addFn.reducer;
