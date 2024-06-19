import { useEffect } from "react";
import { getBlogById } from "../services/BlogService";
import { useParams } from "react-router-dom"; // 1
import WriterDetails from "./WriterDetails";
import CommentDetails from "./CommentDetails";
import { useDispatch, useSelector } from "react-redux";
import { setBlogDetails } from "../redux/BlogSlice";

const BlogDetails = () => {

    const dispatch = useDispatch();
    const blogParam = useParams(); // 2
    const blogData = useSelector(store => store.blog.blogDetails);

    useEffect(() => {
        console.log('useEffect');
        getBlogDetails();
    }, []);

    const getBlogDetails = () => {
        getBlogById(blogParam.id) // 3
            .then((response) => {
                console.log(response.data);
                dispatch(setBlogDetails(response.data));
            })
            .catch((error) => { console.error(error); });
    };
    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        <p className="display-4 text-primary mb-3">{blogData.title}</p>
                        <hr />
                        {
                            blogData.title &&
                            <img width="100%" src="https://picsum.photos/900/400" alt={blogData.title} />
                        }
                        <hr />
                        {blogData.userId &&
                            <WriterDetails userId={blogData.userId} />
                        }
                        <hr />
                        <p> {blogData.body}  {blogData.body}  {blogData.body}  {blogData.body}  {blogData.body} </p>
                        <hr />
                        {blogData.id &&
                            <CommentDetails postId={blogData.id} />
                        }
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
        </>
    );
};
export default BlogDetails;

// import { useEffect, useState } from "react";
// import { getBlogById } from "../services/BlogService";
// import { useParams } from "react-router-dom";
// import WriterDetails from "./WriterDetails";
// import CommentDetails from "./CommentDetails";

// const BlogDetails = () => {
//     const blogParam = useParams();
//     const [blogData, setBlogData] = useState({});

//     useEffect(() => {
//         console.log('useEffect'); getBlogDetails();
//     }, [])

//     const getBlogDetails = () => {
//         getBlogById(blogParam.id)
//             .then((response) => { console.log(response.data); setBlogData(response.data); })
//             .catch((error) => { console.error(error); });
//     };
//     return (
//         <>
//             <div className="container mt-3">
//                 <p className="display-4 text-primary mb-3">{blogData.title}</p>
//                 <hr />
//                 {
//                     blogData.title &&
//                     <img width="100%" src="https://picsum.photos/900/400" alt={blogData.title} />
//                 }
//                 {blogData.userId &&
//                     <WriterDetails userId={blogData.userId} />
//                 }
//                 <hr />
//                 <p> {blogData.body} </p>
//                 <hr />
//                 {blogData.id &&
//                     <CommentDetails postId={blogData.id} />
//                 }
//                 <hr />
//             </div>
//         </>
//     );
// };
// export default BlogDetails;

// import { useEffect, useState } from "react";
// import { getBlogById } from "../services/BlogService";
// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//     const blogParam = useParams();
//     const [blogData, setBlogData] = useState({});

//     useEffect(() => {
//         console.log('useEffect'); getBlogDetails();
//     }, [])

//     const getBlogDetails = () => {
//         getBlogById(blogParam.id)
//             .then((response) => { console.log(response.data); setBlogData(response.data); })
//             .catch((error) => { console.error(error); });
//     };
//     return (
//         <div className="container">
//             <> <h1>{blogData.title}</h1>
//                 <hr />
//                 <p> {blogData.body} </p>
//                 <hr />
//                 <p>Following element is only to increase the body of the blog.</p>
//                 <p>{blogData.title && Array.from(blogData.title).map((blog, i) => {
//                     return <span obj={blog} key={i}> {blogData.body} </span>;
//                 })}</p>
//             </>
//         </div>
//     );
// };
// export default BlogDetails;