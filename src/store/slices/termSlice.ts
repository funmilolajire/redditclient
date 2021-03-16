import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TermState {
  value: ''
}

const initialState: TermState = {
  value: ''
}

export const termSlice = createSlice({
  name: 'term',

  initialState,

  reducers: {
    termChange: (state: { value: string }, action: PayloadAction<string>): void => {
      state.value = action.payload;
    },
  },
});


export const { termChange } = termSlice.actions;

export default termSlice.reducer;
