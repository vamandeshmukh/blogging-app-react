// UserSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from '../services/StorageService';
const UserSlice = createSlice({
    name: 'user',
    initialState: loadState(),
    reducers: {
        userLogin: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.loggedInUser = action.payload;
            if (state.loggedInUser) {
                state.loginStatus = true;
                saveState(state);
            }
        },
        userLogout: (state, action) => {
            state.loggedInUser = '';
            state.loginStatus = false;
            saveState(state);
        }
        // other reducers
    }
});
export default UserSlice.reducer;
export const { userLogin, userLogout } = UserSlice.actions;



// // UserSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// console.log('UserSlice');

// const saveState = (loggedInUser, status) => {
//     localStorage.setItem('loginState', loggedInUser);
//     localStorage.setItem('isLoggedIn', status);
// };

// const loadState = () => {
//     return localStorage.getItem('loginState');
// };

// const UserSlice = createSlice({
//     name: 'user',
//     initialState: {
//         loggedInUser: localStorage.getItem('loginState'),
//         loginStatus: localStorage.getItem('isLoggedIn')
//     },
//     reducers: {
//         userLogin: (state, action) => {
//             console.log(state);
//             console.log(action.payload);
//             state.loggedInUser = action.payload;
//             state.loginStatus = true;
//             saveState(state.loggedInUser, true);
//         },
//         userLogout: (state, action) => {
//             state.loggedInUser = '';
//             state.loginStatus = false;
//         }
//         // other reducers
//     }
// });
// export default UserSlice.reducer;
// export const { userLogin, userLogout } = UserSlice.actions;


// // UserSlice.js

// import { createSlice } from "@reduxjs/toolkit";
// import { loadState, saveState } from '../services/StorageService';

// console.log('UserSlice');
// const UserSlice = createSlice({
//     name: 'user',
//     initialState: loadState(),
//     reducers: {
//         userLogin: (state, action) => {
//             console.log(state);
//             console.log(action.payload);
//             state.loggedInUser = action.payload;
//             if (state.loggedInUser) {
//                 state.loginStatus = true;
//                 saveState(state);
//             }
//         },
//         userLogout: (state, action) => {
//             state.loggedInUser = '';
//             state.loginStatus = false;
//             saveState(state);
//         }
//         // other reducers
//     }
// });

// export default UserSlice.reducer;

// export const { userLogin, userLogout } = UserSlice.actions;



// import { createSlice } from "@reduxjs/toolkit";

// const UserSlice = createSlice({
//     name: 'user',
//     initialState: {
//         loggedInUser: '',
//         loginStatus: 'false'
//     },
//     reducers: {
//         userLogin: (state, action) => {
//             console.log(state);
//             console.log(action.payload);
//             state.loggedInUser = action.payload;
//             if (state.loggedInUser)
//                 state.loginStatus = true;
//         },
//         userLogout: (state, action) => {
//             state.loggedInUser = '';
//             state.loginStatus = false;
//         }
//         // , other reducers
//     }
// });

// export default UserSlice.reducer;

// export const { userLogin, userLogout } = UserSlice.actions;











// import { createSlice } from "@reduxjs/toolkit";

// const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
// const loginStatus = sessionStorage.getItem('loginStatus') === 'true';

// console.log(loggedInUser.name);

// const UserSlice = createSlice({
//     name: 'user',
//     initialState: {
//         loggedInUser: loggedInUser ? JSON.parse(loggedInUser) : '',
//         loginStatus: loginStatus || false
//     },
//     reducers: {
//         userLogin: (state, action) => {
//             state.loggedInUser = action.payload;
//             sessionStorage.setItem('loggedInUser', action.payload);
//             state.loginStatus = true;
//             sessionStorage.setItem('loginStatus', true);
//         },
//         userLogout: (state) => {
//             state.loggedInUser = '';
//             state.loginStatus = false;
//             sessionStorage.removeItem('loggedInUser');
//             sessionStorage.removeItem('loginStatus');
//         }
//         // Add other reducers if necessary
//     }
// });

// export default UserSlice.reducer;

// export const { userLogin, userLogout } = UserSlice.actions;



