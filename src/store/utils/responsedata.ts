import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { formatNumber } from './formatNumber';

dayjs.extend(relativeTime);

//response data format for posts
export const posts__PostData = (child: ResponseState) => ({
    upvotes: formatNumber(child.data.ups, 1),
    downvotes: formatNumber(child.data.downs, 1),
    postTitle: child.data.title,
    postBody: child.data.selftext_html,
    postThumbnail: child.data.thumbnail,
    postImage: child.data.url || child.data.url_overridden_by_dest,
    postVideo: child.data.secure_media !== null && child.data.secure_media.reddit_video ? child.data.secure_media.reddit_video.fallback_url : '',
    postAltVideo: child.data.media !== null && child.data.media.reddit_video ? child.data.media.reddit_video.fallback_url : '',
    postIframe: child.data.secure_media_embed !== null && child.data.secure_media_embed.content ? child.data.secure_media_embed.content : '',
    postAltIframe: child.data.media_embed !== null && child.data.media_embed.content ? child.data.media_embed.content : '',
    time: dayjs.unix(child.data.created_utc).fromNow(),
    user: child.data.author,
    subreddit: child.data.subreddit_name_prefixed,
    comments: formatNumber(child.data.num_comments, 1),
    permalink: child.data.permalink
})

//response data format for more information post
export const moreInformation__PostData = (child: ResponseState) => ({
    upvotes: formatNumber(child.data.ups, 1),
    downvotes: formatNumber(child.data.downs, 1),
    postTitle: child.data.title,
    postBody: child.data.selftext_html,
    postThumbnail: child.data.thumbnail,
    postImage: child.data.url || child.data.url_overridden_by_dest,
    postVideo: child.data.secure_media !== null && child.data.secure_media.reddit_video ? child.data.secure_media.reddit_video.fallback_url : '',
    postAltVideo: child.data.media !== null && child.data.media.reddit_video ? child.data.media.reddit_video.fallback_url : '',
    postIframe: child.data.secure_media_embed !== null && child.data.secure_media_embed.content ? child.data.secure_media_embed.content : '',
    postAltIframe: child.data.media_embed !== null && child.data.media_embed.content ? child.data.media_embed.content : '',
    time: dayjs.unix(child.data.created_utc).fromNow(),
    user: child.data.author,
    subreddit: child.data.subreddit_name_prefixed,
    comments: formatNumber(child.data.num_comments, 1),
    permalink: child.data.permalink
})

//response data format for more information comments
export const moreInformation__CommentsData = (child: ResponseState) => ({
    author: child.data.author,
    comment: child.data.body_html,
    id: child.data.id,
    permalink: child.data.permalink,
    time: dayjs.unix(child.data.created_utc).fromNow(),
    upvotes: formatNumber(child.data.ups, 1),
    downvotes: formatNumber(child.data.downs, 1),
    depth: child.data.depth,
    num_replies: child.data.replies && child.data.replies.data ? formatNumber(child.data.replies.data.children.length, 1) : 0
})