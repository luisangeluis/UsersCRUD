import { configureStore } from '@reduxjs/toolkit';
import loader from './slices/loader.slice';

export default configureStore({
  reducer: {
    loader,
  },
});
