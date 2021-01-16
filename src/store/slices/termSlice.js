import { createSlice } from '@reduxjs/toolkit';

export const termSlice = createSlice({
  name: 'term',
  initialState: {
    value: '',
  },
  reducers: {
    termChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { termChange } = termSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTerm = state => state.term.value;

export default termSlice.reducer;
