interface ResponseState {
    [key: string]: any
}

interface SubredditState {
    value: string[],
    loading: boolean
}

interface PostsState {
    posts: ResponseState[],
    loading: boolean,
    listing: string,
    term: string,
    subreddit: string
}

interface MoreInformationState {
    comments: ResponseState[],
    postData: ResponseState,
    loading: boolean,
    permalink: string,
    showModal: boolean
}
