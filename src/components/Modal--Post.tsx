import { PostContent } from './Post--Content';

interface ModalPostType {
    post: {
        [key: string]: any
    }
}

export const ModalPost = (props: ModalPostType) => {
    const { post } = props

    //JSX Element
    return (
        <div className="Modal--Post">
            <p className="Post--Info">posted <span className="time">{post.time}</span> by <span className="user">{post.user}</span> to <span className="subreddit">{post.subreddit}</span></p>
            <div className="Post--Content--Wrapper">
                <PostContent post={post} />
            </div>
        </div>
    )
}