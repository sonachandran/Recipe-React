

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteItems: [],
};


export const favSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addtofavourite: (state, action) => {
      state.favouriteItems = [...state.favouriteItems, action.payload];
    },
    Removefavourite: (state, action) => {
      state.favouriteItems = state.favouriteItems.filter(item => item.idMeal !== action.payload);
    },
  },
});
export const { addtofavourite, Removefavourite} = favSlice.actions;

 export default favSlice.reducer;