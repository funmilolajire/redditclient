import { useRef, useLayoutEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { handleSubredditChange, handleTermChange } from '../store/slices/postsSlice';
import { handleModalState } from '../store/slices/moreInformationSlice';
import { gsap } from 'gsap';

interface SubredditType {
    children: string
};

export const Subreddit = (props: SubredditType) => {
    const { children } = props;

    //animations
    const subRef = useRef<HTMLLIElement>(null);
    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([subRef.current], {
            delay: 3,
            x: '-70%',
            duration: 2,
            ease: 'back'
        })
    }, [])

    //handle subreddit change
    const dispatch = useAppDispatch();
    const subreddit = useAppSelector(state => state.posts.subreddit);
    const handleSubreddit = () => {
        if (null !== subRef.current && subreddit !== subRef.current.id) {
            let newSubreddit = subRef.current.id;
            dispatch(handleSubredditChange(newSubreddit))
            dispatch(handleTermChange(''))
            dispatch(handleModalState(false))
        }
    }
    const handleActiveClass = useCallback(() => {
        if (null !== subRef.current) {
            const classList = subreddit === subRef.current.id ? "Subreddit active" : "Subreddit";
            subRef.current.className = classList
        }
    }, [subreddit])
    useLayoutEffect(() => {
        handleActiveClass();
    }, [handleActiveClass])

    //JSX
    return (
        <li onClick={handleSubreddit} ref={subRef} id={children}>
            <span>{children}</span>
        </li>
    )
}