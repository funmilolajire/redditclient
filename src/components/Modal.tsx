import { useRef, useEffect, useLayoutEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getMoreInformation, handleModalState } from '../store/slices/moreInformationSlice';
import { gsap } from 'gsap';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { ModalPost } from './Modal--Post';
import { ModalComments } from './Modal--Comments';

export const Modal = () => {
    //animations
    const modalRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        const tl = gsap.timeline({})
        tl.from([modalRef.current], {
            opacity: 0,
            x: '100vw',
            ease: 'circ.out',
            duration: 2
        })
    }, [])

    //handle modal
    const permalink = useAppSelector((state) => state.moreInformation.permalink)
    const closeModal = () => {
        dispatch(handleModalState(false))
    }

    //get post comments
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMoreInformation(permalink))
    }, [permalink, dispatch])

    //retrieve data from state for modal
    const postData = useAppSelector((state) => state.moreInformation.postData)
    const comments = useAppSelector((state) => state.moreInformation.comments)
    const loading = useAppSelector((state) => state.moreInformation.loading)

    //JSX Element
    return ReactDOM.createPortal(
        <div ref={modalRef} className="Modal">
            <div className="Modal--Inner">
                <header className="Modal--Header">
                    <span className="Modal--Close" onClick={closeModal}><IoIosCloseCircleOutline /></span>
                </header>
                {!loading ?
                    <div className="Modal--Content" data-testid="Modal--Content">
                        <>
                            <ModalPost post={postData} />
                            <ModalComments comments={comments} />
                        </>
                    </div> :
                    <div className="Modal--Loading">
                        <span></span>
                    </div>
                }
            </div>
        </div>
        , document.getElementById('portal') as HTMLElement)

}