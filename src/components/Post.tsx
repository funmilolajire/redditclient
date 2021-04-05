import { useRef, useLayoutEffect, useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { handleSubredditChange } from '../store/slices/postsSlice';
import { handleModalState, handlePermalinkChange } from '../store/slices/moreInformationSlice';
import { gsap } from 'gsap';
import { PostContent } from './Post--Content';

interface PostType {
    [key: string]: any
}

export const Post = ({ post }: { post: PostType }) => {
    //animations
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

    //handle subreddit click
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.posts.loading)
    const currentSubreddit = useAppSelector(state => state.posts.subreddit);
    const postSubredditRef = useRef<HTMLSpanElement>(null);
    const handleSubredditClick = () => {
        if (null !== postSubredditRef.current && currentSubreddit !== postSubredditRef.current.dataset.subreddit) {
            const newSubreddit = postSubredditRef.current.dataset.subreddit
            newSubreddit && dispatch(handleSubredditChange(newSubreddit));
        }
    }

    //handle post click to reveal more information
    const postRef = useRef<HTMLDivElement>(null)
    const handlePostClick = useCallback(() => {
        try {
            if (null !== postRef.current && postRef.current.dataset.permalink) {
                dispatch(handlePermalinkChange(postRef.current.dataset.permalink))
                dispatch(handleModalState(true));
            }
        } catch (e) { console.log(e) }
    }, [dispatch])

    useEffect(() => {
        const title = postRef.current?.querySelector('.Post .Post--Container .Post--Content--Wrapper .Post--Content .Post--Comments')
        title?.addEventListener('click', handlePostClick)
        return () => {
            title?.removeEventListener('click', handlePostClick)
        }
    })

    //JSX Element
    return (
        <div className="Post" ref={postRef} data-permalink={post.permalink}>
            <div ref={boxRef} className="Post--Container">
                {!loading ?
                    <>
                        <p className="Post--Info">posted <span className="time">{post.time}</span> by <span className="user">{post.user}</span> to <span
                            className="subreddit"
                            onClick={handleSubredditClick}
                            ref={postSubredditRef} data-subreddit={post.subreddit}>
                            {post.subreddit}
                        </span>
                        </p>
                        <div className="Post--Content--Wrapper">
                            <PostContent post={post} />
                        </div>
                    </>
                    :
                    <div className="Post--Content--Loading">
                        <div className="Post--Title--Placeholder"></div>
                        <figure>
                            <div className="Post--Image--Placeholder"></div>
                        </figure>
                        <section>
                            <div className="Post--Body--Placeholder"></div>
                            <div className="Post--Bottom--Placeholder"></div>
                        </section>
                    </div>
                }
            </div>
        </div>
    )
}
