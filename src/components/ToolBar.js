// ToolBar.js

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const ToolBar = () => {

    const blogId = Math.floor(Math.random() * 100);
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const loginStatus = useSelector(store => store.user.loginStatus);


    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchInput.trim() !== '') {
            navigate(`/blog-details/${searchInput.trim()}`);
            setSearchInput('');
        }
    };

    // navbar copied from - 
    // https://getbootstrap.com/docs/5.3/components/navbar/#supported-content

    if (loginStatus === true) {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/home"><img height="25px"
                            src="https://pngimg.com/uploads/ibm/ibm_PNG19660.png" alt="IBM Logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog-list">Blog List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`/blog-details/${blogId}`}>Blog of the Day</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/write-blog">Write Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                                <input
                                    className="form-control me-2"
                                    type="number"
                                    placeholder="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
    else {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/home"><img height="25px"
                            src="https://pngimg.com/uploads/ibm/ibm_PNG19660.png" alt="IBM Logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog-list">Blog List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                                <input
                                    className="form-control me-2"
                                    type="number"
                                    placeholder="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }

}

export default ToolBar;


// import { Link } from "react-router-dom";

// const ToolBar = () => {

//     return (
//         <>
//             <Link to="blog-list">Blog List</Link>
//             <Link to="login">Login</Link>
//             <Link to="home">Home</Link>
//             <Link to="register">Register</Link>
//         </>
//     );
// }

// export default ToolBar;
