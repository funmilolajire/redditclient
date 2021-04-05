import { useLayoutEffect, useCallback, useState } from 'react';
import { IoChevronUpCircle } from 'react-icons/io5';

export const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }, [showScroll, setShowScroll]);

    const buttonStyle = {
        display: showScroll ? 'flex' : 'none',
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [checkScrollTop])

    return (
        <span className="ScrollToTop" title="scroll to top" aria-label="scroll to top">
            <IoChevronUpCircle className="ScrollToTopButton" role="button" data-testid="ScrollToTopButton" style={buttonStyle} onClick={scrollTop} />
        </span>
    )
}