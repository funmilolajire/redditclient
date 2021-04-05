import axios from 'axios';
import { posts__PostData, moreInformation__PostData, moreInformation__CommentsData } from '../utils';

const url = 'https://www.reddit.com';

//fetch subreddits
export const subredditsList = async () => {
    try {
        const response: ResponseState = await axios(`${url}/subreddits.json`);
        const children: ResponseState[] = response.data.data.children;
        return children.map(
            (subreddit: ResponseState): string => subreddit.data.display_name_prefixed
        );
    } catch (err) {
        console.log(err)
    }
}

//fetch posts based on subreddit or listing
export const subredditPosts = async ({ subreddit, listing }: { subreddit?: string, listing?: string }) => {
    try {
        const response: ResponseState = await axios(`${url}${subreddit}${listing}.json`);
        const children: ResponseState[] = response.data.data.children;
        return children.map(posts__PostData);
    } catch (err) {
        console.log(err)
    }
}

//fetch posts based on search results
export const searchResults = async (term: string) => {
    try {
        const response: ResponseState = await axios(`${url}/search.json?q=${term}`);
        const children: ResponseState[] = response.data.data.children;
        return children.map(posts__PostData);
    } catch (err) {
        console.log(err)
    }
}

//fetch post information and comments for modal
export const moreInformation = async (permalink: string) => {
    try {
        const url = 'https://www.reddit.com';
        const response: ResponseState = await axios(`${url}/${permalink}.json`);
        const postData: ResponseState[] = response.data[0].data.children.map(moreInformation__PostData)[0];
        const comments: ResponseState[] = response.data[1].data.children.map(moreInformation__CommentsData);
        return { postData, comments }
    } catch (e) {
        console.log(e)
    }
}