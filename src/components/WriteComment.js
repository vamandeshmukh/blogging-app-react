// WriteComment.js

import { useState } from "react";
import { writeNewComment } from "../services/CommentService";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const WriteComment = ({ onCommentAdded, blogId }) => {

    const [writeCommentData, setWriteCommentData] = useState({ name: '', body: '' });
    const [message, setMessage] = useState('');
    const commentWriter = useSelector(state => state.user.loggedInUser);
    const loginStatus = useSelector(store => store.user.loginStatus);
    const navigate = useNavigate();
    const location = useLocation();

    const handleInput = (evt) => {
        setWriteCommentData({
            ...writeCommentData,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleFocus = () => {
        if (loginStatus)
            setMessage(`Please login to comment.`);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('handleSubmit');
        console.log(loginStatus);

        if (loginStatus) {
            const newComment = { blogId: blogId, name: writeCommentData.name, body: writeCommentData.body, email: commentWriter.email };
            console.log(newComment);
            writeNewComment(newComment)
                .then((response) => {
                    console.log(response.data);
                    onCommentAdded();
                    setMessage(`Your comment "${response.data.name}" has been posted successfully!`);
                })
                .catch((error) => {
                    console.error(error);
                    setMessage(error.message);
                });
            setWriteCommentData({
                name: '',
                body: '',
            });
            setMessage('');
        }
        else {
            setMessage(`Please login to comment, redirecting to login...`);
            setTimeout(() => {
                navigate('/login', { state: { from: location } });
            }, 1000);
        }
    };

    return (
        <>
            <div className="container mt-3">
                <p className="lead text-primary mb-3">Write a Comment</p>
                <div className="">
                    <form onSubmit={handleSubmit} className="form-group">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name<span className="text-danger">*</span></label>
                            <input type="text" name="name" className="form-control" value={writeCommentData.name} onChange={handleInput} onFocus={handleFocus} placeholder="Please enter name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Body<span className="text-danger">*</span></label>
                            <textarea type="text" name="body" className="form-control" value={writeCommentData.body} onChange={handleInput} onFocus={handleFocus} placeholder="Please enter body" required />
                        </div>

                        <input type="submit" className="btn btn-outline-primary" value="Submit" />
                    </form>
                    <p className="mt-3"> {message && message} </p>
                </div>
                <hr />
            </div>
        </>
    );
};

export default WriteComment;
