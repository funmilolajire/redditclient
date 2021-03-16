import { useRef, useLayoutEffect, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getSubredditsList } from '../store/slices/subredditsSlice';
import { gsap } from 'gsap';
import { Searchbar } from './Searchbar';
import { Subreddit } from './Subreddit';

export const Subreddits = () => {
    //animations
    const boxRef = useRef<HTMLDivElement>(null);
    const subRef = useRef<HTMLHeadingElement>(null);
    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([boxRef.current], {
            y: '-120%',
            delay: 2,
            duration: 2,
            ease: 'power3.inOut'
        })
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
    const getSubreddits = async () => {
        await dispatch(getSubredditsList());
    }
    useEffect(() => {
        getSubreddits();
    }, [])

    //JSX
    return (
        <div ref={boxRef} className="Subreddits">
            <div className="Subreddits--Container">
                <Searchbar />
                <section className="pt-12">
                    <h2 ref={subRef} className="">subreddits</h2>
                    <ul className="subreddits-list">
                        {subreddits && subreddits.map(subreddit => <Subreddit key={subreddit}>{subreddit}</Subreddit>)}
                    </ul>
                </section>
            </div>
        </div>
    )
}