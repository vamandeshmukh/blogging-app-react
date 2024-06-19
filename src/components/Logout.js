import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../redux/UserSlice";

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitLogout = () => {
        console.log('Logged out successfully!');
        dispatch(userLogout());
        setTimeout(() => {
            navigate('/home');
        }, 1000);
    };

    return (
        <>
            <div className="container mt-3">
                <p className="display-4 text-primary mb-3">Logout Component</p>
                <hr />
                <button type="button" className="btn btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Logout
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Logout</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure to logout?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { alert(`If you didn't wish to logout, why the hell did you come here?`) }} >No</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={submitLogout}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Logout;