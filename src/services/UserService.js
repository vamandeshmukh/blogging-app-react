
import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const login = (user) => {
    console.log(user);
    return axios.post(`${apiUrl}/login`, user);
};

const register = (user) => {
    console.log(apiUrl);
    console.log(user);
    return axios.post(`${apiUrl}/register`, user);
};

const getUserProfile = (id) => {
    console.log(id);
    return axios.get(`${apiUrl}/${id}`);
};

const updateUserProfile = (user) => {
    console.log(user.get('id'));
    return axios.put(`${apiUrl}/users/${user.get('id')}`, user);
};

export { login, register, updateUserProfile, getUserProfile };



// import axios from "axios";

// const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// const userService = {

//     login: (user) => {
//         console.log(user);
//         return axios.get(apiUrl);
//     },

//     register: (user) => {
//         console.log(user);
//         return axios.post(apiUrl, user);
//     },

//     getProfile: (id) => {
//         console.log(id);
//         return axios.get(`${apiUrl}/${id}`);
//     },

//     updateProfile: (user) => {
//         console.log(user);
//         return axios.put(apiUrl, user);
//     }

// };


// export default userService;



