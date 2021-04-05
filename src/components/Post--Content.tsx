import parse from 'html-react-parser';
import { VideoPlayer } from './Video';
import { BiComment } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';

interface PostType {
    [key: string]: any
}

export const PostContent = ({ post }: { post: PostType }) => {
    //parse html from api
    const parsedHTML = (html: string) => html ? parse(parse(html).toString()) : null;

    //JSX Element
    return (
        <div className="Post--Content">
            <h3 className="Post--Title" data-read-more="Click Title to Open">{parsedHTML(post.postTitle)}</h3>
            {post.postImage && ["jpg", "avif", "webp", "png", "svg", "ai", "psd", "gif"].includes(post.postImage.split('.')[post.postImage.split('.').length - 1]) ? <figure className="Post--Figure">
                <img src={post.postImage} alt={post.postTitle} className="Post--Image" loading="lazy" />
            </figure> : post.postImage && !post.postImage.includes("comment") && <p><a href={post.postImage}>Follow this link</a></p>}
            {
                ((post.postVideo && post.postVideo.length !== 0) || (post.postAltVideo && post.postAltVideo.length !== 0)) && <div className="Post--Video">
                    {/* <video src={post.postVideo || post.postAltVideo} autoPlay preload="auto" loop muted={false} controls></video> */}
                    <VideoPlayer videoSrc={post.postVideo || post.postAltVideo} />
                </div>
            }
            {
                ((post.postIframe && post.postIframe.length !== 0) || (post.postAltIframe && post.postAltIframe.length)) && <div className="Post--Iframe">
                    {parsedHTML(post.postIframe) || parsedHTML(post.postAltIframe)}
                </div>
            }
            <section>
                {post.postBody && <div className="Post--Body">{parsedHTML(post.postBody)}</div>}
                <div className="Post--Bottom">
                    <div className="Post--Comments">
                        <BiComment className="comment-icon icon" />
                        <span className="comments value">{post.comments}</span>
                        <span className="label">{post.comments !== 1 ? 'comments' : 'comment'}</span>
                    </div>
                    <BsDot className="dot-icon" />
                    <div className="Votes Post--Upvotes">
                        <GoArrowUp className="arrow-icon icon" />
                        <span className="upvotes value">{post.upvotes}</span>
                        <span className="label">{post.upvotes !== 1 ? 'upvotes' : 'upvote'}</span>
                    </div>
                    <BsDot className="dot-icon" />
                    <div className="Votes Post--Downvotes">
                        <GoArrowDown className="arrow-icon icon" />
                        <span className="downvotes value">{post.downvotes}</span>
                        <span className="label">{post.downvotes !== 1 ? 'downvotes' : 'downvote'}</span>
                    </div>
                </div>
            </section>
        </div>
    )
}