import axios from 'axios';


export const getListingPosts = async (listing) => {
    const url = 'https://www.reddit.com';
    const response = await axios(`${url}/${listing}.json`);
    const children = response.data.data.children;
    return children;
};

export const getSearchPosts = async (term) => {
    const url = 'https://www.reddit.com';
    const response = await axios(`${url}/search.json?q=${term}`);
    const children = response.data.data.children;
    return children;
};

export const getSubredditPosts = async (subreddit) => {
    const url = 'https://www.reddit.com';
    const response = await axios(`${url}/${subreddit}.json`);
    const children = response.data.data.children;
    return children;
};

export const getSubreddits = async () => {
    const url = 'https://www.reddit.com';
    const response = await axios(`${url}/subreddits.json`);
    return response.data.data.children.map((subreddit) => subreddit.data.display_name);
};

export const getPostComments = async (permalink) => {
    const url = 'https://www.reddit.com';
    const response = await axios(`${url}/${permalink}.json`);
    return response[1].data.data.children.map((subreddit) => subreddit.data);
};
