import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
   name:"garima Raghav",
   mail:"garimaragha*@gmail.com",
   allPokemonData:[],
   specificPokemonDetail:{}
  },
  reducers: {
    increment: (state,action) => {
      state.mail= "default"
    },
    decrement: (state) => {
      state.mail=""
    },
    allPokemonData: (state, action) => {
      state.allPokemonData=[...action.payload]
    },
    specificPokemonData: (state, action) => {
      state.specificPokemonDetail={...action.payload}
    },
  },
})

export const { increment, decrement, allPokemonData ,specificPokemonData} = pokemonSlice.actions

export default pokemonSlice.reducer