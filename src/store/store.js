import { configureStore } from '@reduxjs/toolkit';
import termReducer from './slices/termSlice';

export default configureStore({
  reducer: {
    term: termReducer,
  },
});
