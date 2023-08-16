import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './createSlice.jsx'

export const store = configureStore({
  reducer: {
    cart: counterReducer,
  },
})
export default store