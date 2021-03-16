import { configureStore } from '@reduxjs/toolkit';
import termReducer from './slices/termSlice';
import subredditsReducer from './slices/subredditsSlice';

export const store = configureStore({
  reducer: {
    term: termReducer,
    subreddits: subredditsReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch