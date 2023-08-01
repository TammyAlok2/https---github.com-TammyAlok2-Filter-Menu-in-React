import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Redux'

export const store = configureStore({
  reducer: {
    counter : CounterSlice
  },
})