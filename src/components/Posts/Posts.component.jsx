import { Post } from '../Post/Post.component';

export const Posts = props => {
    return (
        <div className="Posts">
            <Post />
            <Post />
            <Post />
        </div>
    )
}