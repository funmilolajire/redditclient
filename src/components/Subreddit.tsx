import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

interface SubredditType {
    children: string
};

export const Subreddit = (props: SubredditType) => {
    const { children } = props;

    const subRef = useRef<HTMLLIElement>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([subRef.current], {
            delay: 3,
            x: '-60%',
            duration: 2,
            ease: 'back',
            stagger: 0.1
        })
    })
    return (
        <li ref={subRef} key={children} className="Subreddit">
            <span className="">{children}</span>
        </li>
    )
}
Subreddit.defaultProps = {
    children: ''
}