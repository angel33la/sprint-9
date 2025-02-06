import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "carGame",
  initialState: {
    speed: 100,
    isTopLane: false,
  },
  reducers: {
    accelerate(state, action) {
      state.speed += 10;
    },
    decelerate(state, action) {
      state.speed = state.speed <= 10 ? state.speed : state.speed - 10;
    },
    switchLane(state, action) {
      state.isTopLane = !state.isTopLane;
    },
  },
});

export default carSlice.reducer;
export const { accelerate, decelerate, switchLane } = carSlice.actions;
