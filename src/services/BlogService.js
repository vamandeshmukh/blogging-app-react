
import axios from "axios";

// const blogUrl = 'https://jsonplaceholder.typicode.com/posts/';
const blogUrl = process.env.REACT_APP_BACKEND_URL;

const getAllBlogs = () => {
    console.log('getAllBlogs');
    return axios.get(`${blogUrl}/blogs`);
};

const getBlogById = (id) => {
    console.log(id);
    return axios.get(`${blogUrl}/blogs/${id}`);
};

const writeBlogPost = (blog) => {
    console.log(blog);
    return axios.post(`${blogUrl}/blogs`, blog);
};

export { getAllBlogs, getBlogById, writeBlogPost };

