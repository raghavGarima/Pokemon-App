import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/reducer'
import pokemonReducer from '../reducer/pokemonDetail'
export default configureStore({
  reducer: {
    counter:counterReducer,
    pokemon:pokemonReducer,
  },
})