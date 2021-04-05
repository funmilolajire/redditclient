import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from './slices/subredditsSlice';
import postsReducer from './slices/postsSlice';
import moreInformationReducer from './slices/moreInformationSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,
    moreInformation: moreInformationReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch