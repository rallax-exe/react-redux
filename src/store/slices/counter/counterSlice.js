import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counter:10
  },
  reducers: {
    /*
      Recibimos el estado en nuestro
      reducer, el estado en este caso
      seria el valor de nuestro
      counter = 10
    */
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },

    /*
      Cuando se recibe props 
      'action' contiene las 
      props.
      El payload es el 
      parametro que contiene 
      el valor del las props
      puede ser un int, string,
      objet, etc.
    */
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },

    decrement: (state) => {
      state.counter -= 1;
    },

  },
})

// Action creators are generated for each case reducer function
/*
  Esto le duce a nuestro store cual reducer
  usar en caso de recibir una solicitud de
  alguna accion de nuestros reducers
  disponibles.
*/
// Funciones que crean acciones o Action Creators Functions 
export const { increment, incrementBy, decrement } = counterSlice.actions
