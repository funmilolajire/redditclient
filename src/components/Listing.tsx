import { useRef, useLayoutEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { handleListingChange, handleTermChange } from '../store/slices/postsSlice';

export const Listing = ({ listItem }: { listItem: string }) => {
    const listingRef = useRef<HTMLLIElement>(null);

    //handle listing change and active class
    const dispatch = useAppDispatch();
    const listing = useAppSelector(state => state.posts.listing);
    const handleListing = () => {
        if (null !== listingRef.current && listing !== listingRef.current.id) {
            let newListing = listingRef.current.id;
            dispatch(handleListingChange(newListing))
            dispatch(handleTermChange(''))
        }
    }
    const handleActiveClass = useCallback(() => {
        if (null !== listingRef.current) {
            const classList = listing === listingRef.current.id ? "Listing active" : "Listing";
            listingRef.current.className = classList
        }
    }, [listing])
    useLayoutEffect(() => {
        handleActiveClass();
    }, [handleActiveClass])


    //JSX
    return (
        <li ref={listingRef} data-testid={listItem} onClick={handleListing} id={listItem}>
            {listItem}
        </li>
    )
}