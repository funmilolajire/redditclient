import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Searchbar } from './Searchbar';
import { Subreddit } from './Subreddit';

export const Subreddits = () => {
    const subreddits: string[] = ['askreddit', 'worldnews', 'videos', 'funny', 'todayilearned', 'pics', 'gaming', 'movies', 'news', 'gifs', 'mildyinteresting', 'aww', 'popular', 'all', 'random', 'hot', 'rising', 'controversial', 'top', 'gilded', 'users'];

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
    })

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