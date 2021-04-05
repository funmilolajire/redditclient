import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const ComingSoon = () => {
    const boxRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({ repeatDelay: 2 })
        tl.from([boxRef.current], {
            y: '-55vh',
            duration: 3,
            delay: 2,
            opacity: 0,
            ease: 'elastic'
        })
    })

    return (
        <div ref={boxRef} className="ComingSoon">
            <div>
                <p>Coming Soon</p>
            </div>
        </div>
    )
}