import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { moreInformation } from '../api';

//set initial state
const initialState: MoreInformationState = {
    comments: [],
    postData: {},
    loading: true,
    permalink: '',
    showModal: false,
}

//get more information on post(i.e post information and comments) for modal
export const getMoreInformation = createAsyncThunk('moreInformation__modal', moreInformation)

//create more information slice
const moreInformationSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        handleModalState: (state: MoreInformationState, { payload }: { payload: boolean }) => {
            state.loading = true
            state.showModal = payload;
            if (state.showModal === true) {
                document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
            } else {
                document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
                document.getElementsByTagName('body')[0].classList.add('overflow-auto');
            }
        },
        handlePermalinkChange: (state: MoreInformationState, { payload }: { payload: string }) => {
            state.loading = true
            state.permalink = payload;
        },
        //for testing
        handleLoadingChange: (state: MoreInformationState, { payload }: { payload: boolean }) => {
            state.loading = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(getMoreInformation.fulfilled, (state: MoreInformationState, { payload }) => {
            if (payload) {
                payload.comments.pop()
                state.comments = payload.comments;
                state.postData = payload.postData;
                state.loading = false
            }
        }
        )
    }
})

//export more information reducer and actions
export default moreInformationSlice.reducer;
export const { handleModalState, handlePermalinkChange, handleLoadingChange } = moreInformationSlice.actions;