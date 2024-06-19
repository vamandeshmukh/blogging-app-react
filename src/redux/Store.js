// steps in using redux store -

// install libraries
// create store - Store.js
// provide store to the app - index.js 
// create slices - ComponentNameSlice.js 
// send data to store using dispatch and reducer methods - in components  
// receive data from store using selector - in components 

import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';
import BlogReducer from './BlogSlice';

console.log('store');
const store = configureStore({
    reducer: {
        user: UserReducer,
        blog: BlogReducer,
        // other: OtherReducer 
    }
});

export default store;





// import { configureStore } from "@reduxjs/toolkit";
// import UserReducer from './UserSlice';

// // steps to use redux in react

// // 1. create store
// // provide store to index.js
// // create slices for each components
// // call slice methods in components to send data to store
// // call dispatchers in components
// // selectors to get data from store

// const store = configureStore({
//     reducer: {
//         user: UserReducer,
//         // blog: BlogReducer,
//         // other: OtherReducer
//     }

// });

// export default store;



