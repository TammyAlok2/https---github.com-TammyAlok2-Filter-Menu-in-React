import { createSlice } from "@reduxjs/toolkit";

const initialState =[]
const CounterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.find((item) => item.id === itemId);
      if (item) {
        item.length += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.find((item) => item.id === itemId);
      if (item && item.length > 1) {
        item.length -= 1;
      }
    },
  },
});

export const { add, remove ,incrementQuantity,decrementQuantity} = CounterSlice.actions;
export default CounterSlice.reducer;
