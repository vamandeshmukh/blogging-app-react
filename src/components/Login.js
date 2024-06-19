import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../services/UserService";
import { userLogin } from "../redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const loggedUserDataFromStore = useSelector(store => store.user.loggedInUser);

    const [message, setMessage] = useState('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleInput = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value,
        });
        console.log(loginData);
    };

    const handleSubmit = (evt) => {
        console.log(loginData);
        evt.preventDefault();
        login(loginData)
            .then((response) => {
                console.log(response.data);
                if (response.data.username === loginData.username
                    && response.data.username === loginData.password) {
                    dispatch(userLogin(response.data)); // send data to redux store 
                    setMessage(`Hi ${loggedUserDataFromStore.username}! You've logged in successfully!`);
                    setTimeout(() => {
                        const redirectTo = location.state?.from?.pathname || "/profile";
                        navigate(redirectTo);
                        // navigate('/profile');
                    }, 1000);
                }
                else {
                    setMessage('Invalid credentials!');
                }
            })
            .catch((error) => {
                console.error(error);
                setMessage(error.message);
            });

        setLoginData({
            username: '',
            password: '',
        });
        setMessage('');
    };

    return (
        <>
            <div className="container mt-3">
                <p className="display-4 text-primary">Login</p>
                <hr />
                <p className="lead">Login here to continue</p>

                <div className="col-4">
                    <form onSubmit={handleSubmit} className="form-group">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username<span className="text-danger">*</span></label>
                            <input type="text" name="username" className="form-control" value={loginData.username} onChange={handleInput} placeholder="Please enter username" required autoFocus />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                            <input type="password" name="password" className="form-control" value={loginData.password} onChange={handleInput} placeholder="Please enter password" required />
                        </div>
                        <input type="submit" className="btn btn-outline-primary" value="Submit" />
                    </form>
                    {message &&
                        <p className={`mt-3 ${(message === 'Invalid credentials!') ? 'text-danger' : 'text-success'}`}>{message}</p>
                    }
                    <p className="mt-3">Not yet registerd? <Link to="/register" className="text-decoration-none">Register</Link> </p>
                </div >
            </div>
        </>
    );
};

export default Login;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../services/UserService";
// import { userLogin } from "../redux/UserSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Login = () => {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const loggedUserDataFromStore = useSelector(store => store.user.loggedInUser);

//     const [message, setMessage] = useState('');
//     const [loginData, setLoginData] = useState({
//         username: '',
//         password: '',
//     });

//     const handleInput = (evt) => {
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value,
//         });
//         console.log(loginData);
//     };

//     const handleSubmit = (evt) => {
//         console.log(loginData);
//         evt.preventDefault();
//         login(loginData)
//             .then((response) => {
//                 console.log(response.data);
//                 if (response.data.username === loginData.username
//                     && response.data.username === loginData.password) {
//                     dispatch(userLogin(response.data)); // send data to redux store
//                     setMessage(`Hi ${loggedUserDataFromStore.username}! You've logged in successfully!`);
//                     setTimeout(() => {
//                         navigate('/profile');
//                     }, 1000);
//                 }
//                 else {
//                     setMessage('Invalid credentials!');
//                 }
//             })
//             .catch((error) => {
//                 console.error(error);
//                 setMessage(error.message);
//             });

//         setLoginData({
//             username: '',
//             password: '',
//         });
//         setMessage('');
//     };

//     return (
//         <>
//             <div className="container mt-3">
//                 <p className="display-4 text-primary">Login</p>
//                 <hr />
//                 <p className="lead">Login here to continue</p>

//                 <div className="col-4">
//                     <form onSubmit={handleSubmit} className="form-group">
//                         <div className="mb-3">
//                             <label htmlFor="username" className="form-label">Username<span className="text-danger">*</span></label>
//                             <input type="text" name="username" className="form-control" value={loginData.username} onChange={handleInput} placeholder="Please enter username" required autoFocus />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
//                             <input type="password" name="password" className="form-control" value={loginData.password} onChange={handleInput} placeholder="Please enter password" required />
//                         </div>
//                         <input type="submit" className="btn btn-outline-primary" value="Submit" />
//                     </form>
//                     {message &&
//                         <p className={`mt-3 ${(message === 'Invalid credentials!') ? 'text-danger' : 'text-success'}`}>{message}</p>
//                     }
//                     <p className="mt-3">Not yet registerd? <Link to="/register" className="text-decoration-none">Register</Link> </p>
//                 </div >
//             </div>
//         </>
//     );
// };

// export default Login;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../services/UserService";
// import { userLogin } from "../redux/UserSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Login = () => {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     // const loggedUserDataFromStore = useSelector(() => {});
//     // const loggedUserDataFromStore = useSelector((store) => { return store.user.loggedInUser});
//     const loggedUserDataFromStore = useSelector(store => store.user.loggedInUser);

//     const [message, setMessage] = useState('');
//     const [loginData, setLoginData] = useState({
//         username: '',
//         password: '',
//     });

//     const handleInput = (evt) => {
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value,
//         });
//         console.log(loginData);
//     };

//     const handleSubmit = (evt) => {
//         console.log(loginData);
//         evt.preventDefault();
//         login(loginData)
//             .then((response) => {
//                 let loggedInUser = '';
//                 console.log(response.data);
//                 response.data.forEach((resp) => {
//                     console.log(resp.username);
//                     if (resp.username === loginData.username && resp.username === loginData.password) {
//                         loggedInUser = resp;
//                     }
//                 })
//                 if (loggedInUser) {
//                     console.log(loggedInUser);
//                     // ============================================================
//                     dispatch(userLogin(loggedInUser)); // send data to redux store
//                     // ============================================================
//                     setMessage(`Hi ${loggedInUser.name}! You've logged in successfully!`);
//                     setTimeout(() => {
//                         navigate('/profile');
//                     }, 10000);

//                 }
//                 else {
//                     setMessage('Invalid credentials!');
//                 };
//             })
//             .catch((error) => {
//                 console.error(error);
//                 setMessage(error.message);
//             });

//         setLoginData({
//             username: '',
//             password: '',
//         });
//         setMessage('');
//     };

//     return (
//         <>
//             <div className="container mt-3">
//                 <p className="display-4 text-primary">Login</p>
//                 <hr />
//                 <p className="lead">Login here to continue</p>

//                 <div className="col-4">
//                     <form onSubmit={handleSubmit} className="form-group">
//                         <div className="mb-3">
//                             <label htmlFor="username" className="form-label">Username<span className="text-danger">*</span></label>
//                             <input type="text" name="username" className="form-control" value={loginData.username} onChange={handleInput} placeholder="Please enter username" required autoFocus />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
//                             <input type="password" name="password" className="form-control" value={loginData.password} onChange={handleInput} placeholder="Please enter password" required />
//                         </div>
//                         <input type="submit" className="btn btn-outline-primary" value="Submit" />
//                     </form>
//                     {message &&
//                         <p className={`mt-3 ${(message === 'Invalid credentials!') ? 'text-danger' : 'text-success'}`}>{message}</p>
//                     }
//                     <p className="mt-3">Not yet registerd? <Link to="/register" className="text-decoration-none">Register</Link> </p>
//                 </div >
//             </div>
//             <p>{loggedUserDataFromStore.name}</p>
//         </>
//     );
// };

// export default Login;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../services/UserService";

// const Login = () => {

//     const navigate = useNavigate();
//     const [message, setMessage] = useState('');
//     const [loginData, setLoginData] = useState({
//         username: '',
//         password: '',
//     });

//     const handleInput = (evt) => {
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value,
//         });
//         console.log(loginData);
//     };

//     const handleSubmit = (evt) => {
//         console.log(loginData);
//         evt.preventDefault();
//         login(loginData)
//             .then((response) => {
//                 let validUsername = '';
//                 console.log(response.data);
//                 response.data.forEach((resp) => {
//                     console.log(resp.username);
//                     if (resp.username === loginData.username && resp.username === loginData.password) {
//                         validUsername = resp.username;
//                     }
//                 })
//                 if (validUsername) {
//                     console.log(loginData.username);
//                     setMessage(`Hi ${validUsername}! You've logged in successfully!`);
//                     setTimeout(() => {
//                         navigate('/profile');
//                     }, 1000);

//                 }
//                 else {
//                     setMessage('Invalid credentials!');
//                 };
//             })
//             .catch((error) => {
//                 console.error(error);
//                 setMessage(error.message);
//             });

//         setLoginData({
//             username: '',
//             password: '',
//         });
//         setMessage('');
//     };

//     return (
//         <>
//             <div className="container mt-3">
//                 <p className="display-4 text-primary">Login</p>
//                 <hr />
//                 <p className="lead">Login here to continue</p>

//                 <div className="col-4">
//                     <form onSubmit={handleSubmit} className="form-group">
//                         <div className="mb-3">
//                             <label htmlFor="username" className="form-label">Username<span className="text-danger">*</span></label>
//                             <input type="text" name="username" className="form-control" value={loginData.username} onChange={handleInput} placeholder="Please enter username" required autoFocus />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
//                             <input type="password" name="password" className="form-control" value={loginData.password} onChange={handleInput} placeholder="Please enter password" required />
//                         </div>
//                         <input type="submit" className="btn btn-outline-primary" value="Submit" />
//                     </form>
//                     {message &&
//                         <p className={`mt-3 ${(message === 'Invalid credentials!') ? 'text-danger' : 'text-success'}`}>{message}</p>
//                     }
//                     <p className="mt-3">Not yet registerd? <Link to="/register" className="text-decoration-none">Register</Link> </p>
//                 </div >
//             </div>
//         </>
//     );
// };

// export default Login;

// const Login = () => {

//     return (
//         <div>
//             <h1>Login Component</h1>
//             <p>Login Component</p>
//         </div>
//     );

// };

// export default Login;

// import { Component } from "react";

// class Login extends Component {

//     render() {
//         return <p>Login Component</p>
//     }
// };

// export default Login;

// const Login = () => {

//     return <p>Login Component</p>
// };

// export default Login;