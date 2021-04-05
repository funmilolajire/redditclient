import { useRef, useLayoutEffect } from 'react';
import { Listing } from './Listing';
import { gsap } from 'gsap';

export const Listings = () => {
    const listings: string[] = ['hot', 'new', 'top', 'best', 'rising', 'controversial'];

    //animations
    const listingBoxRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([listingBoxRef.current], {
            x: '1200%',
            delay: 2,
            duration: 2,
            ease: 'power3.inOut'
        })
    }, [])

    return (
        <div ref={listingBoxRef} className="Listings">
            <ul className="Listings--List">
                {
                    listings && listings.map(listing => <Listing key={listing} listItem={listing} />)
                }
            </ul>
        </div>
    )
}