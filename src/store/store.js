import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon';

/*
  Este es un store, donde
  tenemos las colecciones de
  nuestros slices.
*/
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
});