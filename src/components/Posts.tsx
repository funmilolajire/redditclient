import { Post } from './Post';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import random from '../images/random.jpeg';

const post = {
    likes: 538,
    postTitle: 'Questions about new wallet',
    postImage: random,
    time: 'an hour ago',
    user: 'theindependentonline',
    subreddit: 'r/politics',
    comments: 284
}

export const Posts = () => {
    const boxRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([boxRef.current], {
            opacity: 0,
            // y: '100vh',
            delay: 3,
            ease: 'slow'
        })
    })

    const posts = [post, post, post, post, post, post, post, post, post, post, post, post, post, post, post, post]

    return (
        <div className="Posts">
            <div ref={boxRef} className="PostsContainer">
                {posts && posts.map((post, i) => <Post post={post} key={i} />)}
            </div>
        </div>
    )
}