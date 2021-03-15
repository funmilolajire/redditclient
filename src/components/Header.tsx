import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import logo from '../images/logo192.png';

export const Header = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
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
        <header>
            <div className="header-inner">
                <section ref={boxRef}>
                    <figure ref={logoRef}>
                        <img src={logo} alt="site logo" />
                    </figure>
                    <h1 ref={titleRef}>
                        <span>Reddit</span>Client
                    </h1>
                </section>
            </div>
        </header>
    )
}