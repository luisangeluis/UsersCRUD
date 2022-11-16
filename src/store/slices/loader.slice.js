import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: null,
  reducers: {
    setLoader: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
