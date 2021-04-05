import { Post } from './Post';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { getSubredditPosts, getSearchResults } from '../store/slices/postsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { gsap } from 'gsap';
import { Modal } from './Modal';

export const Posts = () => {
    // animations
    const boxRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([boxRef.current], {
            opacity: 0,
            delay: 3,
            ease: 'slow'
        })
    }, [])

    //get Posts
    const dispatch = useAppDispatch()
    let posts = useAppSelector(state => state.posts.posts)
    const listing = useAppSelector(state => state.posts.listing);
    const subreddit = useAppSelector(state => state.posts.subreddit);
    const term = useAppSelector(state => state.posts.term);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (listing.length === 0 && subreddit.length === 0) {
            dispatch(getSearchResults(term))
        } else {
            if (listing.length !== 0 && subreddit.length !== 0) {
                dispatch(getSubredditPosts({ subreddit: `/${subreddit}`, listing: `/${listing}` }));
            } else if (listing.length === 0 && subreddit.length !== 0) {
                dispatch(getSubredditPosts({ subreddit: `/${subreddit}`, listing: '' }));
            } else if (listing.length !== 0 && subreddit.length === 0) {
                dispatch(getSubredditPosts({ subreddit: '', listing: `/${listing}` }));
            }
        }
    }, [subreddit, listing, term, dispatch])

    //handle modal's visibility
    const showModal = useAppSelector((state) => state.moreInformation.showModal);

    //JSX
    return (
        <>
            <div ref={boxRef} className="Posts">
                {term.length !== 0 && <p className="search--results">showing search results for: <span>{term}</span></p>}
                <>
                    {posts && posts.map((post, i) => <Post post={post} key={i} />)}
                </>
                {term.length !== 0 && posts.length === 0 && <div className="no--results">
                    <p>Sorry, it appears there are no posts matching your search.</p>
                </div>}
            </div>
            {showModal && <Modal />}
        </>
    )
}