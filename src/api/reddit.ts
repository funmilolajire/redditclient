// import axios from 'axios';

export const url = 'https://www.reddit.com';

// export const getSubredditPosts = async (subreddit) => {
//     const response = await axios(`${url}${subreddit}.json`);
//     return response.data.children.map((post) => post.data);
// };

// export const getSubreddits = async () => {
//     const response = await axios(`${url}/subreddits.json`);
//     return response.data.children.map((subreddit) => subreddit.data);
// };

// export const getPostComments = async (permalink: string) => {
//     const response = await axios(`${url}${permalink}.json`);
//     return response[1].data.children.map((subreddit: { data: string }) => subreddit.data);
// };
