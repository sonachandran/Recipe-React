import { configureStore } from '@reduxjs/toolkit'
import favReducer from './Reducer'

export const Store = configureStore({
  reducer: {
    favourites: favReducer,
  },
})





