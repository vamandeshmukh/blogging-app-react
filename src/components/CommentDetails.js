import { useEffect, useState } from "react";
import { getCommentsByPostId } from "../services/CommentService";
import { Link } from "react-router-dom";
import WriteComment from "./WriteComment";

const CommentDetails = ({ postId }) => {
    console.log('blogId', postId);
    const [commentsList, setCommentsList] = useState();

    const getComments = () => {
        getCommentsByPostId(postId)
            .then((response) => {
                console.log(response.data);
                setCommentsList(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        console.log(postId);
        getComments();
    }, []);


    return (
        <>
            <WriteComment onCommentAdded={getComments} blogId={postId} />
            {commentsList &&
                < p className="lead text-primary">{commentsList.length} Comments: </p >
            }
            <> {commentsList &&
                commentsList.map((comment, i) => {
                    return <div obj={comment} key={i}>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                        <Link to={`mailto:${comment.email}`} >{comment.email}</Link>
                        <p></p>
                        <hr />
                    </div>
                })
            }</>
        </>
    );
};

export default CommentDetails;
