import { useRef, useLayoutEffect, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getSubredditsList } from '../store/slices/subredditsSlice';
import { handleSubredditChange } from '../store/slices/postsSlice';
import { gsap } from 'gsap';
import { Subreddit } from './Subreddit';
import { IoIosClose } from 'react-icons/io';

export const Subreddits = () => {
    //animations
    const subRef = useRef<HTMLHeadingElement>(null);
    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([subRef.current], {
            delay: -1,
            scale: 2,
            x: '-100%',
            duration: 2,
            ease: 'elastic',
        })
    }, [])

    //get subreddits list
    const subreddits = useAppSelector((state: { subreddits: { value: string[] } }): string[] => state.subreddits.value)
    const dispatch = useAppDispatch();
    const getSubreddits = useCallback(async () => {
        await dispatch(getSubredditsList());
    }, [dispatch])
    useEffect(() => {
        getSubreddits();
    }, [getSubreddits])

    //get and remove active subreddit
    const subreddit = useAppSelector(state => state.posts.subreddit)
    const removeSubreddit = () => {
        dispatch(handleSubredditChange(''))
    }

    //JSX
    return (
        <section className="pt-12 Subreddits">
            <h2 ref={subRef} className="">subreddits</h2>
            {subreddit.length !== 0 && <div className="current--subreddit"><span className="subreddit">{subreddit}</span><span onClick={removeSubreddit} className="icon"><IoIosClose /></span></div>}
            <ul className="subreddits--list">
                {subreddits && subreddits.map(subreddit => <Subreddit key={subreddit}>{subreddit}</Subreddit>)}
            </ul>
        </section>
    )
}