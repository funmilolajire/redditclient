import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { subredditsList } from '../api'

//set initial state
const initialState: SubredditState = {
    value: [],
    loading: true
}

//get subreddits list
export const getSubredditsList = createAsyncThunk('subreddits', subredditsList)

//create subreddits slice
const subredditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSubredditsList.fulfilled, (state: SubredditState, { payload }) => {
            if (payload)
                state.value = payload;
            state.loading = false;
        })
    }
})

//export subreddits slice reducer
export default subredditsSlice.reducer