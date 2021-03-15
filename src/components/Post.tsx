import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

interface PostType {
    post: {
        likes: number;
        comments: number;
        postTitle: string;
        user: string;
        subreddit: string;
        time: string;
        postImage: string;
    }
}

export const Post = (props: PostType) => {
    const { likes, comments, postTitle, user, subreddit, time, postImage } = props.post;

    const boxRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([boxRef.current], {
            y: '150%',
            duration: 2,
            delay: 3,
            ease: 'back'
        })
    }, [])

    return (
        <div className="Post">
            <div ref={boxRef} className="Post--Container ">
                <div className=" Post-Likes">
                    <p><span className="likes">{likes}</span><span className="label">likes</span></p>
                </div>
                <div className="Post--Content">
                    <figure>
                        <img src={postImage} alt="post" />
                    </figure>
                    <section>
                        <h3 className="postTitle">{postTitle}</h3>
                        <p>submitted <span className="time">{time}</span> by <span className="user">{user}</span> to <span className="subreddit">{subreddit}</span></p>
                        <div className="Post--Comments"><span className="comments">{comments}</span> comments</div>
                    </section>
                </div>
            </div>
        </div>
    )
}
Post.defaultProps = {
    post: {
        likes: 0,
        postTitle: '',
        postImage: '',
        time: '',
        user: '',
        subreddit: '',
        comments: 0
    }
}