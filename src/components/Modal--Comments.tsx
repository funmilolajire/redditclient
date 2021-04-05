import { ModalComment } from "./Modal--Comment";

interface Comment {
    [key: string]: any
}
interface ModalCommentsType {
    comments: Comment[]
}

export const ModalComments = (props: ModalCommentsType) => {
    const { comments } = props;
    return (
        <div className="Modal--Comments">
            {
                comments.length !== 0 ?
                    <>
                        <h3>Comments</h3>
                        <div className="comments">
                            {comments && comments.map((comment: Comment) => <ModalComment key={comment.id} comment={comment} />)}
                        </div>
                    </> :
                    <p className="no--comments">No comments yet</p>
            }
        </div>
    )
}