import logo from './logo192.png';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const Header = () => {
    const boxRef = useRef();
    const logoRef = useRef();
    const titleRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({});
        tl.from([boxRef.current], {
            duration: 1
        })
        tl.from([logoRef.current], {
            x: '-3000px',
            opacity: 0,
            ease: 'circ'
        })
        tl.from([titleRef.current], {
            x: '3000px',
            opacity: 0,
            ease: 'slow'
        })
    })

    return (
        <div className="relative z-10 py-4 bg-gray-100 shadow-2xl">
            <section ref={boxRef} className="flex items-center justify-center">
                <figure ref={logoRef} className="w-20">
                    <img className="w-full h-auto" src={logo} alt="site logo" />
                </figure>
                <h1 ref={titleRef} className="pl-5 text-6xl" style={{ fontFamily: "Stylish, sans-serif" }}><span className="text-yellow-500">Reddit</span>Client</h1>
            </section>
        </div>
    )
}