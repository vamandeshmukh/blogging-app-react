
import { createSlice } from "@reduxjs/toolkit";

console.log('BlogSlice');
const BlogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogDetails: '',
        blogList: ''
    },
    reducers: {
        setBlogDetails: (state, action) => {
            console.log(action.payload);
            state.blogDetails = action.payload;
        }
        ,
        setBlogList: (state, action) => {
            console.log(action.payload);
            state.blogList = action.payload;
        }
    }
});

export default BlogSlice.reducer;

export const { setBlogDetails, setBlogList } = BlogSlice.actions;

