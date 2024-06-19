// AppRoutes.js

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Home from "./Home";
import Page404 from "./Page404";
import ToolBar from "./ToolBar";
import BlogDetails from "./BlogDetails";
import BlogList from "./BlogList";
import WriteBlog from "./WriteBlog";
import Logout from "./Logout";
import { useSelector } from "react-redux";

const AppRoutes = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus === true) {
        return (
            <>
                <BrowserRouter>
                    <>
                        <ToolBar />
                    </>
                    <Routes>
                        <Route path="logout" element={<Logout />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="write-blog" element={<WriteBlog />} />
                        <Route path="blog-list" element={<BlogList />} />
                        <Route path="blog-details/:id" element={<BlogDetails />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="home" element={<Navigate to="/" replace />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
    else {
        return (
            <>
                <BrowserRouter>
                    <>
                        <ToolBar />
                    </>
                    <Routes>
                        <Route path="blog-list" element={<BlogList />} />
                        <Route path="blog-details/:id" element={<BlogDetails />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="home" element={<Navigate to="/" replace />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }



};

export default AppRoutes;
