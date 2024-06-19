import axios from "axios";

// const commentUrl = 'https://jsonplaceholder.typicode.com/comments';
const commentUrl = process.env.REACT_APP_BACKEND_URL;


export const getCommentsByPostId = (id) => {
    console.log(id);
    return axios.get(`${commentUrl}/blogs/${id}/comments`);
};

export const writeNewComment = (comment) => {
    console.log(comment);
    return axios.post(`${commentUrl}/comments`, comment);
};


