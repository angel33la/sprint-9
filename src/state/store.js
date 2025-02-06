import { configureStore } from "@reduxjs/toolkit";
import antFarmReducer from "./antFarmSlice";
import carSliceReducer from "./carSlice";
import { pokedexApi } from "./pokedexApi";
import { pokeCartApi } from "./pokeCartApi";

export const store = configureStore({
  reducer: {
    antFarm: antFarmReducer,
    carGame: carSliceReducer,
    [pokedexApi.reducerPath]: pokedexApi.reducer,
    [pokeCartApi.reducerPath]: pokeCartApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(pokedexApi.middleware).concat(pokeCartApi.middleware),
});
