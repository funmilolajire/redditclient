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
        <div ref={boxRef} className="container flex items-center justify-center h-screen font-extrabold ComingSoon">
            <div className="bg-yellow-500 border-2 border-gray-800 border-solid skew-y-2 transform-gpu text-gray-50 text-9xl">
                <p>Coming Soon</p>
            </div>
        </div>
    )
}