import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Ant1", lifePoints: 10 },
  { name: "Ant2", lifePoints: 8 },
];

const antFarmSlice = createSlice({
  name: "antFarm",
  initialState,
  reducers: {
    eat(state, action) {
      const ant = state.find((ant) => ant.name === action.payload);
      if (ant) {
        ant.lifePoints += 5;
      }
    },
    work(state, action) {
      const ant = state.find((ant) => ant.name === action.payload);
      if (ant) {
        if (ant.lifePoints - 3 <= 0) {
          return state.filter((ant) => ant.name !== action.payload);
        }
        ant.lifePoints -= 3;
      }
    },
    addAnt(state, action) {
      const newAnt = { name: "Ant" + (state.length + 1), lifePoints: 10 };
      state.push(newAnt);
    },
  },
});

export default antFarmSlice.reducer;
export const { eat, work, addAnt } = antFarmSlice.actions;
