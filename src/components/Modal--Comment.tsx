import { useRef } from 'react';
import parse from 'html-react-parser';
import { BiComment } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';

interface ModalCommentType {
    [key: string]: any
}

export const ModalComment = ({ comment }: { comment: ModalCommentType }) => {
    const modalCommentRef = useRef<HTMLDivElement>(null);

    //parse comment html
    const parsedHTML = (html: string) => html ? parse(parse(html).toString()) : null;

    //JSX Element
    return (
        <div className="ModalComment" ref={modalCommentRef} data-permalink={comment.permalink}>
            <p className="Comment--Info">comment made <span className="time">{comment.time}</span> by <span className="author">{comment.author}</span></p>
            <div className="Comment--Body">
                {parsedHTML(comment.comment)}
            </div>
            <div className="Comment--Bottom">
                <div className="Comment--Replies">
                    <BiComment className="reply-icon icon" />
                    <span className="comments value">{comment.num_replies}</span>
                    <span className="label">{comment.num_replies !== 1 ? 'replies' : 'reply'}</span>
                </div>
                <BsDot className="dot-icon" />
                <div className="Votes Comment--Upvotes">
                    <GoArrowUp className="arrow-icon icon" />
                    <span className="upvotes value">{comment.upvotes}</span>
                    <span className="label">{comment.upvotes !== 1 ? 'upvotes' : 'upvote'}</span>
                </div>
                <BsDot className="dot-icon" />
                <div className="Votes Comment--Downvotes">
                    <GoArrowDown className="arrow-icon icon" />
                    <span className="downvotes value">{comment.downvotes}</span>
                    <span className="label">{comment.downvotes !== 1 ? 'downvotes' : 'downvote'}</span>
                </div>
            </div>
        </div>
    )
}