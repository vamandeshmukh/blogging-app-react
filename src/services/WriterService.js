import axios from "axios";

// const writerUrl = 'https://jsonplaceholder.typicode.com/users';
const writerUrl = process.env.REACT_APP_BACKEND_URL;

export const getWriterById = (id) => {
    console.log(id);
    return axios.get(`${writerUrl}/writers/${id}`);
};
