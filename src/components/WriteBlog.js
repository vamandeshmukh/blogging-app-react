// WriteBlog.js

import { useState } from "react";
import { writeBlogPost } from "../services/BlogService";
import { useSelector } from "react-redux";

const WriteBlog = () => {

    const [writeBlogData, setWriteBlogData] = useState({ title: '', body: '' });
    const [message, setMessage] = useState('');
    const blogWriter = useSelector(state => state.user.loggedInUser);

    const handleInput = (evt) => {
        console.log(evt.target.value);
        setWriteBlogData({
            ...writeBlogData,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newBlog = { userId: blogWriter.id, ...writeBlogData };
        writeBlogPost(newBlog)
            .then((response) => {
                console.log(response.data);
                setMessage(`Blog with the id ${response.data.id} and title ${response.data.title} has been posted successfully!`);
            })
            .catch((error) => {
                console.error(error);
                setMessage(error.message);
            });
        setWriteBlogData({
            title: '',
            body: '',
        });
        setMessage('');
    };

    return (
        <>
            <div className="container mt-3">
                <p className="display-4 text-primary mb-3">Write a Blog</p>
                <hr />
                <p className="lead">Express yourself</p>
                <div className="col-6">
                    <form onSubmit={handleSubmit} className="form-group">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title<span className="text-danger">*</span></label>
                            <input type="text" name="title" className="form-control" value={writeBlogData.title} onChange={handleInput} placeholder="Please enter title" required autoFocus />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Body<span className="text-danger">*</span></label>
                            <textarea type="text" name="body" className="form-control" value={writeBlogData.body} onChange={handleInput} placeholder="Please enter body" required />
                        </div>

                        <input type="submit" className="btn btn-outline-primary" value="Submit" />
                    </form>
                    <p> {message && message} </p>
                </div>
            </div>
        </>
    );
};

export default WriteBlog;
