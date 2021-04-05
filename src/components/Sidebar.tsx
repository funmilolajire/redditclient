import { useRef, useLayoutEffect, useEffect } from 'react';
import { Searchbar } from "./Searchbar";
import { Subreddits } from './Subreddits';
import { gsap } from 'gsap';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { useAppSelector } from '../store/hooks';

export const Sidebar = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([boxRef.current], {
            y: '-120%',
            delay: 0,
            duration: 2,
            ease: 'power3.inOut'
        })
        tl.from([menuRef.current], {
            y: '-120%',
            delay: 0,
            duration: 2,
            ease: 'power3.inOut'
        })
    }, [])

    const openMobileMenu = () => {
        const mobileMenu = menuRef.current?.dataset.mobileMenu
        if (mobileMenu) {
            menuRef.current?.classList.remove('sm:flex')
            boxRef.current?.classList.remove('sm:hidden')
        }
    }

    const closeMobileMenu = () => {
        const menu = boxRef.current?.dataset.menu
        if (menu) {
            boxRef.current?.classList.add('sm:hidden')
            menuRef.current?.classList.add('sm:flex')
        }
    }

    const subreddit = useAppSelector(state => state.posts.subreddit)
    const listing = useAppSelector(state => state.posts.listing);
    const term = useAppSelector(state => state.posts.term);
    const showModal = useAppSelector(state => state.moreInformation.showModal);

    useEffect(() => {
        closeMobileMenu()
    }, [subreddit, listing, term, showModal])

    return (
        <>
            <aside ref={boxRef} data-menu className="Sidebar sm:hidden">
                <div className="Sidebar--Container">
                    <span onClick={closeMobileMenu} className="close"><IoCloseOutline /> </span>
                    <Searchbar />
                    <Subreddits />
                </div>
            </aside>

            <aside ref={menuRef} data-mobile-menu onClick={openMobileMenu} className="Mobile--Sidebar sm:flex hidden">
                <span className="menu"><HiOutlineMenuAlt2 /> </span>
            </aside>
        </>
    )
}