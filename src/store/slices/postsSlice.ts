import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchResults, subredditPosts } from '../api';

//set initial state
const initialState: PostsState = {
    posts: [],
    loading: true,
    listing: 'hot',
    term: '',
    subreddit: ''
}

//get subreddit,listing posts and search results
export const getSubredditPosts = createAsyncThunk('subredditPosts', subredditPosts)
export const getSearchResults = createAsyncThunk('searchResults', searchResults)

//create posts slice
const postsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        handleListingChange: (state: PostsState, { payload }: { payload: string }) => {
            state.loading = true;
            state.listing = payload
        },
        handleSubredditChange: (state: PostsState, { payload }: { payload: string }) => {
            state.loading = true;
            state.subreddit = payload
        },
        handleTermChange: (state: PostsState, { payload }: { payload: string }) => {
            state.term = payload;
        },
        //for testing
        handleLoadingChange: (state: PostsState, { payload }: { payload: boolean }) => {
            state.loading = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(getSubredditPosts.fulfilled, (state: PostsState, { payload, meta }) => {
            if (payload)
                state.posts = payload;
            state.loading = false;
            if (meta.arg.listing) {
                state.listing = meta.arg.listing.substring(1);
            }
            if (meta.arg.subreddit) {
                state.subreddit = meta.arg.subreddit.substring(1);
            }
        });
        builder.addCase(getSearchResults.fulfilled, (state: PostsState, { payload }) => {
            if (payload)
                state.posts = payload;
            state.loading = false;
        })
    }
})

//export posts slice reducer and actions
export default postsSlice.reducer;
export const { handleListingChange, handleSubredditChange, handleTermChange, handleLoadingChange } = postsSlice.actions;