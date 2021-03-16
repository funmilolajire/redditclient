import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SubredditState {
    value: string[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: SubredditState = {
    value: [],
    status: 'idle'
}

export const getSubredditsList = createAsyncThunk('subreddits',
    async () => {
        const url = 'https://www.reddit.com';
        const response = await axios(`${url}/subreddits.json`);
        return response.data.data.children.map(
            (subreddit: { data: { display_name_prefixed: string } }) => subreddit.data.display_name_prefixed
            );
    }
)

export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSubredditsList.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = 'succeeded';
        })
    }
})

export default subredditsSlice.reducer
